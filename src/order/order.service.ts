import { Injectable, BadRequestException } from '@nestjs/common';
import { Order, OrderedProducts } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderService {

    constructor(private prismaService: PrismaService) {}

    public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany();
    }

    public getById(id: Order['id']): Promise<Order | null> {
      return this.prismaService.order.findUnique({
        where: { id },
        include: { user: true, orderedProduct: {
          include: {car: true}
        }}
      });
  }

    public async create(
        orderData: Omit<Order, 'id' | 'createdAt' | 'userId'>,
        user: string,
        orderedProduct: Omit<OrderedProducts, 'id' | 'createdAt'>
      ): Promise<Order> {
        
        const otherData = {
          name: orderData.name,
          address: orderData.address,
          email: orderData.email,
          phone: orderData.phone, 
          userId: user,
        };


        const CartData: string = orderData.products;
        const firstArray: string[] = CartData.split('/');
        const newObject = {};
        for(let i: number = 0; i < firstArray.length; i++) {
          newObject[i] = firstArray[i];
        };

        const productData = [];

        for(let data in newObject) {
          const inArry = newObject[data].split(',');
          const inObject: {
            carId: string;
            sum: string;
            amount: string;
            comments: string
          } = {
            carId: inArry[0],
            sum: inArry[1],
            amount: inArry[2],
            comments: inArry[3]
          };
          productData.push(inObject);
        };
        

        try {
          return await this.prismaService.order.create({
            data: {
              ...otherData,
                orderedProduct: {
                  createMany: { 
                  data: productData
                  }
                },
              },
          });
          
        } catch (error) {
          if (error.code === 'P2025')
            throw new BadRequestException("Product doesn't exist");
          throw error;
        }
      }
}

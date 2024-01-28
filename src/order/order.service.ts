import { Injectable, BadRequestException } from '@nestjs/common';
import { Order } from '@prisma/client';
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
        include: { user: true}
      });
  }

    public async create(
        orderData: Omit<Order, 'id' | 'createdAt' | 'userId'>,
        user: string
      ): Promise<Order> {
        console.log(user);
        const otherData = {
          product: orderData.product,
          name: orderData.name,
          address: orderData.address,
          email: orderData.email,
          phone: orderData.phone, 
          userId: user
        };
        try {
          return await this.prismaService.order.create({
            data: 
              otherData
          });
        } catch (error) {
          if (error.code === 'P2025')
            throw new BadRequestException("Product doesn't exist");
          throw error;
        }
      }
}

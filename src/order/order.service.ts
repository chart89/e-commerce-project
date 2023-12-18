import { Injectable, BadRequestException } from '@nestjs/common';
import { Order } from '@prisma/client';
import { PrismaService } from 'src/shared/services/prisma.service';

@Injectable()
export class OrderService {

    constructor(private prismaService: PrismaService) {}

    public getAll(): Promise<Order[]> {
        return this.prismaService.order.findMany();
    }

    public async create(
        orderData: Omit<Order, 'id' | 'createdAt'>,
      ): Promise<Order> {
        const {...otherData } = orderData;
        try {
          return await this.prismaService.order.create({
            data: {
              ...otherData
            },
          });
        } catch (error) {
          if (error.code === 'P2025')
            throw new BadRequestException("Product doesn't exist");
          throw error;
        }
      }
}

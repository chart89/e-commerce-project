import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Car } from '@prisma/client';


@Injectable()
export class CarsService {
    constructor(private prismaService: PrismaService) {}

    public getAll(): Promise<Car[]> {
        return this.prismaService.car.findMany();
    }

    public getById(id: Car['id']): Promise<Car | null> {
      return this.prismaService.car.findUnique({
        where: { id },
      });
    }
}

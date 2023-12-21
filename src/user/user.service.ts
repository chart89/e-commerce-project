import { Injectable, ConflictException } from '@nestjs/common';
import { Password, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private prismaService: PrismaService) {}

    public getAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }

    public getById(id: User['id']): Promise<User | null> {
        return this.prismaService.user.findUnique({
          where: { id },
        });
    }

    public getByEmail(email: User['email']): Promise<(User & {password: Password}) | null> {
      return this.prismaService.user.findUnique({
        where: { email },
        include: { password: true}
      });
    }

    public async create(userData: Omit<User, 'id'>, password: Password['hashedPassword']): Promise<User> {
      try {
        return await this.prismaService.user.create({
          data: {
            ...userData,
            password: {
              create: {
                hashedPassword: password,
              },
            },
          },
        });
      } catch (error) {
        if (error.code === 'P2002')
        throw new ConflictException("This email is already exist");
          throw error;
      }
  }
}

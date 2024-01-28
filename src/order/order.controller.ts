import { Controller, Get, Post, Body, UseGuards, Request, Param, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dtos/create-order.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get('/')
    getAll() {
      return this.orderService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id', new ParseUUIDPipe()) id: string) {
      const user = await this.orderService.getById(id);
      if (!user) throw new NotFoundException('Order not found');
      return user;
    }

    @Post('/')
    @UseGuards(JwtAuthGuard)
    create(@Body() orderData: CreateOrderDTO, @Request() req) {
      return this.orderService.create(orderData, req.user.userId);
    };
}

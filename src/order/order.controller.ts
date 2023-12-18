import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dtos/create-order.dto';

@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get('/')
    getAll() {
      return this.orderService.getAll();
    }

    @Post('/')
    create(@Body() orderData: CreateOrderDTO) {
      return this.orderService.create(orderData);
    };
}

import { Controller, Get, Param, ParseUUIDPipe, NotFoundException } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

  @Get('/')
  getAll() {
    return this.carsService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id', new ParseUUIDPipe()) id: string) {
    const car = await this.carsService.getById(id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }
}

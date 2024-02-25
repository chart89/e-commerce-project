import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateOrderproductDTO {
    @IsNotEmpty()
    @IsString()
    carId: string;
  
    @IsNotEmpty()
    @IsString()
    sum: string;

    @IsNotEmpty()
    @IsString()
    amount: string;

    @IsNotEmpty()
    @IsString()
    comments: string;

    @IsNotEmpty()
    @IsString()
    orderId: string;


  }
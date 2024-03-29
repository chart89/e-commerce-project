

import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateOrderDTO {
  
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    products: any

  }
import { Controller, Post, Body } from '@nestjs/common';
import { AggregateRoot, CommandBus } from '@nestjs/cqrs/dist';
import { CreateProductRequest } from '../dto';
import { CreateProductCommand } from './commands/CreateProduct.command';

@Controller('products')
export class ProductsController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async createProduct(@Body() data: CreateProductRequest) {
    await this.commandBus.execute<CreateProductCommand, void>(
      new CreateProductCommand(data),
    );
  }
}

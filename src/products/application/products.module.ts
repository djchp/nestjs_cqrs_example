import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductFactory } from '../domain/Product.factory';
import { ProductEntity } from '../infrastracture/entities/product.entity';
import { ProductReadRepository } from '../infrastracture/repositories/product-read.repository';
import { ProductWriteRepository } from '../infrastracture/repositories/product-write.repository';
import { CreateProductHandler } from './commands/CreateProduct.handler';
import { ProductCreatedEventHandler } from './events/Product-created-event.handler';
import { ProductsController } from './products.controller';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    ProductReadRepository,
    ProductWriteRepository,
    CreateProductHandler,
    ProductFactory,
    ProductCreatedEventHandler,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}

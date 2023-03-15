import { Injectable } from '@nestjs/common';
import { ProductWriteRepository } from '../infrastracture/repositories/product-write.repository';
import { Product } from './Product';
import { ProductCreatedEvent } from './events/Product-created-event';

@Injectable()
export class ProductFactory {
  constructor(private readonly writeRepository: ProductWriteRepository) {}
  create(name: string, price: number, stock: number) {
    const product = new Product(name, price, stock);
    const newProd = this.writeRepository.create({
      name: product.getName(),
      stock: product.getStock(),
      price: product.getPrice(),
      id: product.getId(),
    });
    this.writeRepository.save(newProd);
    product.apply(new ProductCreatedEvent(newProd.name));

    return product;
  }
}

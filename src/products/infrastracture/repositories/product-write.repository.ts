import { InjectRepository } from '@nestjs/typeorm';
import { writeConnection } from 'libs/Database.module';
import { Product } from 'src/products/domain/Product';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

export class ProductWriteRepository {
  async save(data: any): Promise<void> {
    await writeConnection.manager.getRepository(ProductEntity).save(data);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

export class ProductWriteRepository extends Repository<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity) repository: Repository<ProductEntity>,
  ) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}

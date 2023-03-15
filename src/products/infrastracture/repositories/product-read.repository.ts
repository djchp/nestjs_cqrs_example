import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';

export class ProductReadRepository extends Repository<ProductEntity> {}

import { Global,Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./entities/product.entity";
import { ProductReadRepository } from "./repositories/product-read.repository";
import { ProductWriteRepository } from "./repositories/product-write.repository";


@Global()
@Module({imports: [TypeOrmModule.forFeature([ProductReadRepository, ProductWriteRepository, ProductEntity])]})
export class InfrastractureModule {}
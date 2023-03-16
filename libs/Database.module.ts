import { Global, Module, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ProductEntity } from 'src/products/infrastracture/entities/product.entity';
import { DataSource, EntityManager } from 'typeorm';

interface WriteConnection {
  readonly manager: EntityManager;
}

export let writeConnection = {} as WriteConnection;
export let readConnection = {};

class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private readonly dataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    entities: [ProductEntity],
  });
  async onModuleInit(): Promise<void> {
    await this.dataSource.initialize();
    if (!this.dataSource.isInitialized) {
      throw new Error('data source not initialized');
    }
    writeConnection = this.dataSource.createQueryRunner();
    readConnection = this.dataSource.manager;
  }
  async onModuleDestroy() {
    await this.dataSource.destroy();
  }
}

@Global()
@Module({
  providers: [DatabaseService],
})
export class DatabaseModule {}

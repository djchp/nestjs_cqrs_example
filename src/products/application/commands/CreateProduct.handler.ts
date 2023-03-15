import { ICommandHandler, CommandHandler, EventPublisher } from '@nestjs/cqrs';
import { ProductFactory } from 'src/products/domain/Product.factory';
import { CreateProductCommand } from './CreateProduct.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    private readonly productFactory: ProductFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createProductCommand }: CreateProductCommand): Promise<void> {
    const { name, price, stock } = createProductCommand;
    const product = this.eventPublisher.mergeObjectContext(
      this.productFactory.create(name, price, stock),
    );
    product.commit();
  }
}

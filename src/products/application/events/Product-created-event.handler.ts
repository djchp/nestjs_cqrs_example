import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { ProductCreatedEvent } from 'src/products/domain/events/Product-created-event';

@EventsHandler(ProductCreatedEvent)
export class ProductCreatedEventHandler
  implements IEventHandler<ProductCreatedEvent>
{
  async handle({ productName }: ProductCreatedEvent): Promise<void> {
    console.log(productName);
  }
}

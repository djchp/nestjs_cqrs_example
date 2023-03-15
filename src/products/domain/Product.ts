import { AggregateRoot } from '@nestjs/cqrs/dist';
import { v4 as uuidv4 } from 'uuid';

export class Product extends AggregateRoot {
  id: string;
  constructor(
    private readonly name: string,
    private readonly price: number,
    private readonly stock: number,
  ) {
    super();
    this.id = uuidv4();
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getStock(): number {
    return this.stock;
  }
}

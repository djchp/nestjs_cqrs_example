import { CreateProductRequest } from "src/products/dto";

export class CreateProductCommand {
  constructor(public readonly createProductCommand: CreateProductRequest) {}
}

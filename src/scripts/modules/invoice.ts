import { HasFormatter } from "../../interfaces/HasFormatter.ts";

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.client} deve R$${this.amount} sobre ${this.details}`;
  }
}

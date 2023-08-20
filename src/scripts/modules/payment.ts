import { HasFormatter } from "../../interfaces/HasFormatter.ts";

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    return `${this.recipient} pagou R$${this.amount} sobre ${this.details}`;
  }
}

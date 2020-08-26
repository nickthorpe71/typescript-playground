import { HasFormatter } from '../Interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  // typescript will auto assign these to whatever is passed in
  // on initialization
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.recipient} is owed $${this.amount} for ${this.details}`;
  }

}
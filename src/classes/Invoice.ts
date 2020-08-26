export class Invoice {
  // typescript will auto assign these to whatever is passed in
  // on initialization
  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ) { }

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`;
  }

}
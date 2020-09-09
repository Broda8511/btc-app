import * as SharedTypes from '../../shared/types';

class Selector {
  public readonly name: string | null;
  public readonly value: string | null;
  public readonly error: string | null;
  public readonly method: string | null;
  public readonly argument: string | null;
  public readonly exchange: number | null;

  [key: string]: any;

  constructor(args?: Partial<SharedTypes.SelectorValues>) {
    this.name = args?.name || null;
    this.value = args?.value || null;
    this.error = args?.error || null;
    this.method = args?.method || null;
    this.argument = args?.argument || null;
    this.exchange = args?.exchange || null;
  }

  public getValues = (): SharedTypes.SelectorValues => ({
    name: this.name,
    value: this.value,
    error: this.error,
    method: this.method,
    argument: this.argument,
    exchange: this.exchange,
  });

  public setValue = (args: Partial<SharedTypes.SelectorValues> & { [key: string]: string | number | null }) => {
    Object.keys(args).forEach((key) => {
      this[key] = args[key];
    });
  };
}

export default Selector;

import Selector from './Selector';

export type State = {
  inputValue: string;
  outputValue: string;
  errors: { id: string; message: string }[];
  selectors: Selector[];
};

export type Coin = {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
};

export type OHLC = {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
};

export type SelectorValues = {
  method: string | null;
  argument: string | null;
  value: string | null;
  exchange: number | null;
  error: string | null;
  name: string | null;
};

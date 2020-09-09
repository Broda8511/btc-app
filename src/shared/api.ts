import axios, { AxiosResponse, AxiosPromise } from 'axios';

import * as Types from './types';

export const getCoinBySymbol = (symbol: string): Promise<AxiosResponse<{ currencies: Types.Coin[] }>> => {
  return axios.get('https://api.coinpaprika.com/v1/search', {
    params: {
      q: symbol,
      modifier: 'symbol_search',
      limit: 1,
    },
  });
};

export const getExchangeByCoinId = (coinId: string): Promise<AxiosPromise<Types.OHLC[]>> => {
  return axios.get(`https://api.coinpaprika.com/v1/coins/${coinId}/ohlcv/latest`);
};

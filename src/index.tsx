import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';

import Main from './containers/Main';

const GlobalStyle = createGlobalStyle`
  * {
    color: #1f1f1f;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
    line-height: 24px;
  }

  body {
    margin: 0;
    padding: 32px;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    font-variant-numeric: tabular-nums;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

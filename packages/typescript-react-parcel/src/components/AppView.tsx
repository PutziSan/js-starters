import * as React from 'react';
import * as yinYangPng from './assets/2000px-Yin_yang.png';

export const AppView = () => (
  <div>
    <h1>42!</h1>
    <h2>import PNG</h2>
    <img alt="my" style={{ maxHeight: 160, width: 'auto' }} src={yinYangPng} />
  </div>
);

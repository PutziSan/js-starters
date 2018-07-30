import * as React from 'react';
import yinYang2000pxPng from './assets/yin-yang-2000px.png';

export const AppView = () => (
  <div>
    <h1>42!</h1>
    <h2>import PNG</h2>
    <img alt="my" style={{ maxHeight: 160, width: 'auto' }} src={yinYang2000pxPng} />
  </div>
);

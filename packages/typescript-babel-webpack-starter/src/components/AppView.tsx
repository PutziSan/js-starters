import * as React from 'react';
import reactLoadable from 'react-loadable';
import yinYang2000pxPng from './assets/yin-yang-2000px.png';
import { JsView } from './JsView';
import { hot } from 'react-hot-loader';

const LoadAppView = reactLoadable({
  loader: () => import('./AsyncTest'),
  loading: () => <div>LOAD!!!</div>,
  render: (loaded, props) => <loaded.AsyncTest {...props} />
});

class InnerAppView extends React.Component<{}, { start: boolean }> {
  state = {
    start: false
  };

  toggleStart = () => this.setState({ start: !this.state.start });

  render() {
    return (
      <div>
        <h1>42!</h1>
        <h2>import static assets (e.g. PNGs):</h2>
        <img
          alt="my"
          style={{ maxHeight: 160, width: 'auto' }}
          src={yinYang2000pxPng}
        />
        <hr />
        <h2>link to static assets (can used as external links, not hashed) asd</h2>
        <img src="/images/yin-yang-public.jpg" />
        <hr />
        <h2>Load async with dynamic <code>import()</code></h2>
        <button onClick={this.toggleStart}>toggle loading</button>
        {this.state.start && <LoadAppView />}
        <hr />
        <h2>Mix JS with TS:</h2>
        <JsView name="comes from TS" />
      </div>
    );
  }
}

export const AppView = hot(module)(InnerAppView);

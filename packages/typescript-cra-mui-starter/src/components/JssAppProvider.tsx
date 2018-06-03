import { createGenerateClassName, jssPreset } from '@material-ui/core';
import { create } from 'jss';
import * as React from 'react';
/// <reference path="@types/react-jss.d.ts" />
import { JssProvider } from 'react-jss';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
// so styled-components will work correctly (see https://material-ui.com/customization/css-in-js/#css-injection-order)
jss.setup({
  insertionPoint: document.getElementById('jss-insertion-point') as HTMLElement,
});

export interface JssAppProviderProps {
  children: React.ReactNode;
}

const JssAppProvider: React.SFC<JssAppProviderProps> = props => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <React.Fragment>{props.children}</React.Fragment>
  </JssProvider>
);

export default JssAppProvider;

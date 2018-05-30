import { create } from 'jss';
import { createGenerateClassName, jssPreset } from '@material-ui/core';
import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
// We define a custom insertion point that JSS will look for injecting the styles in the DOM.
// so styled-components will work correctly (see https://material-ui.com/customization/css-in-js/#css-injection-order)
jss.options.insertionPoint = document.getElementById('jss-insertion-point');

const JssAppProvider = props => (
  <JssProvider jss={jss} generateClassName={generateClassName}>
    <React.Fragment>{props.children}</React.Fragment>
  </JssProvider>
);

export default JssAppProvider;

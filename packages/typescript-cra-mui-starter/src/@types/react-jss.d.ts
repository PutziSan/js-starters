declare module 'react-jss' {
  import {
    CreateStyleSheetOptions,
    GenerateClassName,
    JSSOptions,
    JSSPlugin,
    Rule,
    RuleFactoryOptions,
    Styles,
    StyleSheet,
  } from 'jss';
  import { Style } from 'jss/css';
  import * as React from 'react';

  /* tslint:disable:member-access */
  class JSS {
    constructor(options?: Partial<JSSOptions>);
    createStyleSheet<Name extends string>(
      styles: Partial<Styles<Name>>,
      options?: CreateStyleSheetOptions<Name>
    ): StyleSheet<Name>;
    removeStyleSheet(sheet: StyleSheet): this;
    setup(options?: Partial<JSSOptions>): this;
    use(...plugins: JSSPlugin[]): this;
    createRule(style: Style, options?: RuleFactoryOptions): Rule;
    createRule<Name extends string>(
      name: Name,
      style: Style,
      options?: RuleFactoryOptions<Name>
    ): Rule;
  }

  export interface JssProviderProps {
    jss: JSS;
    generateClassName: GenerateClassName<any>;
  }

  export const JssProvider: React.ComponentType<JssProviderProps>;
}

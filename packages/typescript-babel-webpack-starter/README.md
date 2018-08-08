# setup
Das Projekt ist eigentlich nur mit den neusten Babel-features + Webpack4 gebaut + jest für unit-tests.

```

jest
jest-enzyme
enzyme
enzyme-adapter-react-16

react-hot-loader

typescript
tslint
tslint-config-prettier
tslint-react
prettier

husky
lint-staged

cross-env
ncp
rimraf

source-map-explorer
```
## TODO
document [react-hot-loader](https://github.com/gaearon/react-hot-loader)-Geschichte :-D

## babel
babel wird für alle build+test gleichermaßen genutzt, wobei für jest einige anpassungen vorgenommen werden müssen in der config (über `env` in `.babelrc`)
### babel-dependencies (plugins etc)
| package | description |
| --- | --- |
| [@babel/core](https://new.babeljs.io/docs/en/next/babel-core.html) | peer-dependency für alles andere |
| [@babel/plugin-proposal-class-properties](https://new.babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html) | [siehe proposal](https://github.com/tc39/proposal-class-fields), damit ES6-Klassen-Felder nicht nur im Konstruktor gesetzt werden können |
| [@babel/plugin-syntax-dynamic-import](https://new.babeljs.io/docs/en/next/babel-plugin-syntax-dynamic-import.html) | nur [Syntax-Plugin](https://new.babeljs.io/docs/en/next/plugins.html#syntax-plugins)! damit babel dynamic imports versteht, [webpack nutzt das dann fürs code-splitting](https://webpack.js.org/guides/code-splitting/#dynamic-imports) |
| [@babel/plugin-transform-modules-commonjs](https://new.babeljs.io/docs/en/next/babel-plugin-transform-modules-commonjs.html) | nur fürs testing, da jest kein es6 `import`/`export` versteht, [jest-erklärung](https://jestjs.io/docs/en/webpack.html#using-with-webpack-2)  |
| [@babel/preset-env](https://new.babeljs.io/docs/en/next/babel-preset-env.html) | >ES6 zu ES5 |
| [@babel/preset-react](https://new.babeljs.io/docs/en/next/babel-preset-react.html) | JSX zu JS |
| [@babel/preset-typescript](https://new.babeljs.io/docs/en/next/babel-preset-typescript.html) | TS zu JS |
| [babel-plugin-dynamic-import-node](https://github.com/airbnb/babel-plugin-dynamic-import-node) | das einzige nicht von babel selbst sondern von airbnb, nur für testing, siehe [jest-erklärung](https://jestjs.io/docs/en/webpack.html#using-with-webpack-2) |

### weitere babel-deps
| package | description |
| --- | --- |
| [babel-core@7.0.0-bridge.0](https://github.com/babel/babel-bridge) | für jest-test, [siehe jest-doku](https://jestjs.io/docs/en/getting-started.html#using-babel) |
| [babel-jest](https://github.com/facebook/jest/tree/master/packages/babel-jest) | so that jest also uses the babel-transformations |
| [babel-loader@8.0.0-beta.4](https://github.com/babel/babel-loader) | to transform files via webpack, new babel-load-v8 must be used with new babel7 |


### `.babelrc`

## webpack

## To Observe
[webpack-serve](https://github.com/webpack-contrib/webpack-serve) 
* scheint der succesor von webpack-dev-server zu sein, [welcher nur noch im maintenance-mode ist](https://github.com/webpack/webpack-dev-server#project-in-maintenance)
* => aktuell gibt es aber keine vernünftigen beispiele o.ä. weswegen webpack-dev-server der bessere weg aktuell ist
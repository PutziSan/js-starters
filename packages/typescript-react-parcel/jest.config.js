module.exports = {
  setupTestFrameworkScriptFile: 'jest-enzyme',
  // make sure to install an enzyme-adapter: https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages/jest-environment-enzyme#readme
  testEnvironment: 'enzyme',
  transform: {
    // https://github.com/kulshekhar/ts-jest#supports-synthetic-modules => for default-imports "esModuleInterop"-flag in tsconfig must set to true
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js'
  },
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.test.json' // https://github.com/kulshekhar/ts-jest#tsconfig => sets "jsx" to "react"
    }
  }
};

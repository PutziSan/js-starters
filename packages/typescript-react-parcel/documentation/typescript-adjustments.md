## jest

[ts-jest](https://github.com/kulshekhar/ts-jest) => Anpassungen für jest dass typescript out of the box funktiogeht.

> ! man muss `tsconfig.compilerOptions.jsx = "react"` setzen, da preserve nicht funktioniert.

## tsconfig

`"compilerOptions`
[online doku](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

- moduleResolution node sind quasi standard

### module

> Specify module code generation: "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015" or "ESNext". [module-doku](https://www.typescriptlang.org/docs/handbook/modules.html)

`"module": "commonjs"` => `commonjs` ist quasi default-wert nur explizit benannt.

- Only "AMD" and "System" can be used in conjunction with --outFile.
- "ES6" and "ES2015" values may be used when targeting "ES5" or lower.

#### moduleResolution

> Determine how modules get resolved. Either "Node" for Node.js/io.js style resolution, or "Classic" => [module-resolutions-doku](https://www.typescriptlang.org/docs/handbook/module-resolution.html)

`"moduleResolution": "node"` => `node` ist der vorgeschlagene Wert für neuere Sache nvon TS

### react (jsx)

> Support JSX in .tsx files: "React" or "Preserve" ([jsx-doku](https://www.typescriptlang.org/docs/handbook/jsx.html))

- `"jsx": "react"` => JSX wird von typescript zu React.createElements... umgesetzt
- `"jsx": "preserve"` => modul wird nicht in es5 transpiliert sondern in jsx-files, diese kann parcel wiederum aufnehmen und weiter verarbeiten.
  für parcel funktioniert beides, aber nur `ts-jest` utnerstützt nur `react`

## custom types

Um Bilder importieren zu können musste ein custom_type hinzugefügt werden (siehe `src/@custom_types/images.d.ts`)

### write custom types with [dts-gen](https://github.com/Microsoft/dts-gen) by microsoft

> dts-gen is a tool that generates TypeScript definition files (.d.ts) from any JavaScript object. (...) `dts-gen` is meant to be a starting point for writing a high-quality definition file.

##TSLint ([github](https://github.com/palantir/tslint/))
Kann/sollte in zusammenhang mit [tslint-react](https://github.com/palantir/tslint-react) + [tslint-config-prettier](https://github.com/alexjoverm/tslint-config-prettier)
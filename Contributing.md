# Contributing

Have any suggestions on how to improve the typings? Want to see types for more parts of the api? Feel free to open an issue or pull request.

## Project structure

`generator` contains the generator, which is a cli-like program that creates docs from the runtime api json and manual definitions/overrides.

`generatorSrc` contains the files given to the generator.

`generated` is where the generated declarations are outputted.

`runtime` contains non-generated additional types for the runtime stage.

`tests` contains compilation tests.

## npm/yarn scripts

- `generate` runs the generator and formats the output.
- `generate:dev` runs the generator without formatting with prettier. This takes significantly less time.
- `download-latest-runtime-api` downloads the latest runtime-api.json into the generatorSrc folder.


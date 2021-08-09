# Types

This workspace holds the npm package for factorio types.

`/generatorSrc` contains the files given to the generator.

`/generated` is where the generated declarations are outputed.

`/common` contains non-generated additional types.

`/scripts` contains the script that run the generator.

`/tests` contains compilation tests.

## npm/yarn tasks

- `generate` runs the generator for all factorio versions
- `generate:dev` only runs the generator for the latest factorio version, and without formatting with prettier (formatting takes a long time).


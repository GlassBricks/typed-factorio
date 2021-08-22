# Types

This workspace holds the npm package for factorio types.

`/generatorSrc` contains the files given to the generator.

`/generated` is where the generated declarations are outputted.

`/runtime` contains non-generated additional types for the control stage.

`/scripts` contains the script that run the generator.

`/tests` contains compilation tests.

## npm/yarn tasks

- `generate` runs the generator for all factorio versions
- `generate:dev` only runs the generator for the latest factorio version, and without formatting with prettier. Since formatting takes a long time, this takes significantly shorter.


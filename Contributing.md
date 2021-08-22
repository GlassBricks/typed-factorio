# Contributing

Have any suggestions on how to improve the typings? Want to see types for other parts of the api (lualib)? Feel free to open an issue or pull request.

## Workspace structure

The `generator` workspace contains the generator, which is a cli-like program that creates docs from the runtime api json and manual definitions/overrides. See the [readme](generator/README.md) for more details.

The `definitions` workspace holds the npm package. It also contains the source files given to the generator, additional non-generated types, and compilation tests. See [directories](definitions/directories.md) for more details.

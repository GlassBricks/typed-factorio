## Overview

`typed-factorio` publishes TypeScript type definitions for the Factorio modding
Lua API, for use with [TypeScriptToLua](https://typescripttolua.github.io/). The
published `.d.ts` files in `runtime/`, `prototype/`, `settings/`, and `common/`
are **generated** from Factorio's official API JSON by the code in `generator/`.

A Factorio mod loads in 3 distinct stages, each a separate Lua context exposing
different globals and API surface: **settings**, **prototype** (aka data stage),
**runtime** (the running game; `script`, `game`, `LuaEntity`, etc.). Since each
stage exposes different globals, the API ships separate definitions:
`settings`/`prototype`/`runtime` (plus `common` for what's shared by all).
Consumers pick the stage(s) to pull types in via `compilerOptions.types`. See
also README.md for more detail.

## Commands

- `npm run generate`: regenerate all `.d.ts` files.
- `npm run generate-no-format`: same, but skip Prettier formatting (faster for
  iterating).
- `npm run type-check`: type-checks all three tsconfigs concurrently via
  `type-check:{test,generator,scripts}` — the published declarations plus
  `test/*.ts`, the `generator/` sources, and the `scripts/` sources.
- `npm run lint`: ESLint over only `generator/` sources.
- `npm run format:check` / `format:fix`: Prettier.
- `npm run check`: runs lint + format:check + type-check concurrently. Run this
  before considering generator changes done.
- `npm run check-clean-tree`: fails if `git diff` is non-empty; enforces that
  committed generated files match what `generate` produces. Run by the
  `check-generated-files` CI job (after `clean` + `generate`).
- `npm run clean`: remove `runtime/generated` and `prototype/generated`.

There is no unit-test runner; `test/test.ts` is a type-level test compiled by
`type-check`.

### Updating to a new Factorio version

- `npm run download-latest-api-jsons [version]`: fetch `runtime-api.json` /
  `prototype-api.json` into `generator/input/` (defaults to `latest`).
- `npm run next-factorio-version-diff`, `npm run new-version-changelog`, `npm
  run get-current-factorio-version`: version-bump helpers in `scripts/`.
- `npm run script <file.ts>` runs an arbitrary script under
  `scripts/tsconfig.json`.

The target version is recorded in `package.json` (`factorioVersion`); the input
filenames (`generator/input/{runtime,prototype}-api-<version>.json`).

## Generator architecture

Entry point `generator/main.ts` runs two independent generations: **runtime**
(`RuntimeGenerationContext`) and **prototype** (`PrototypeGenerationContext`).
Settings/common types are mostly manual definitions.

Each generation:

1. Loads the API JSON (`generator/input/<stage>-api-<version>.json`, typed by
   `FactorioRuntimeApiJson.ts` / `FactorioPrototypeApiJson.ts`). 2. Loads a
   **manual definitions** TypeScript file
   (`generator/input/manual-defs-{runtime,prototype}.ts`) as a real
   `ts.SourceFile` + `TypeChecker`. These files hand-author types the JSON
   cannot express and override/augment generated ones via JSDoc tags (e.g.
   `@omit`, `@addTo`). See `ManualDefinitions.ts` and `added-types.ts` for how
   they are parsed and merged.
3. Builds a `GenerationContext` (`generator/GenerationContext.ts`) — the shared
   abstract base holding cross-cutting state (type-name maps, warnings, the
   current output file) and stage-agnostic helpers like doc-URL generation.

The core pattern in each stage's `index.ts` (`generator/runtime/index.ts`,
`generator/prototype/index.ts`) is **two-phase**: a `preprocess*` pass over
every category (classes, concepts, events, defines, etc.) populates context maps
and analysis (e.g. `concept-usage-analysis.ts` decides read/write/array
variants), then a `generate*` pass emits TypeScript AST nodes. Preprocessing for
all categories runs before any generation so cross-references resolve.

Output is assembled via `OutputFile.ts` (`addFile` / `OutputFileBuilder`);
`main.ts` prints each statement with the TypeScript printer and writes
`<stage>/generated/<name>.d.ts`, optionally Prettier-formatted.

Key shared modules: `types.ts` (maps API type descriptors to TS type nodes),
`members.ts` (class/concept member emission), `variantParameterGroups.ts` (the
"additional attributes depending on type" union expansion described in the
README), `documentation.ts` (JSDoc + online doc links), `builtin.ts`,
`genUtil.ts`, `util.ts`.

## Package layout (published)

- `index.d.ts` declares the
  `factorio:common`/`factorio:prototype`/`factorio:runtime` modules (types
  only).
- `runtime/`, `prototype/`, `settings/`, `common/` each has an `index.d.ts`
  (declares stage globals) and, for the generated stages, a `generated/`
  directory. Consumers add e.g. `"typed-factorio/runtime"` to
  `compilerOptions.types`.
- `lualib/` — types for Factorio lualib modules (`util`, `mod-gui`).

The README documents consumer-facing type conventions (read/write + `Array`
concept variants, parameter variant prefixes, `Base`/subclass class types, the
`LuaGuiElement` discriminated union, `nil` === `undefined`). When changing the
generator, preserve these conventions and update the README if they change.

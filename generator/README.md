# Generator

This workspace holds the typescript definitions generator. It is interfaced like a CLI.

It integrates both the JSON format api, and a given manual definitions/overrides file. The typescript AST is used for generation (instead of raw text).

The output is formatted with prettier (optionally, on by default).

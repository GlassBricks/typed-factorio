---
name: update-factorio-version
description: Bring typed-factorio up to a new Factorio API version. Starts from the bot PR branch `factorio-version-<ver>`, and fixes any breakages.
---

# Update to a new Factorio API version

`.github/workflows/check-updated-factorio-version.yml` opens a PR on branch
`factorio-version-<NEW>` when a new version ships. Its checks sometimes fail;
your job is the follow-up commit `Fixes for v<NEW>`. If that branch doesn't
exist, branch from `main` and do what the workflow does, minus creating the PR.

## Done when

- `npm run clean && npm run generate` and `npm run check` pass.
- Workarounds made obsolete by the new version are removed.
- Every remaining workaround flags itself once it's obsolete.

## Workarounds

Prefer expressing fixes through `generator/input/manual-defs-*.ts` over generator code.

When working around an upstream API JSON bug (not ours), make it self-flagging:

1. Preferably, check for the bug's exact symptom and emit a `context.warning` when the symptom is gone.
2. Otherwise, pin it to the version:
   `if (context.factorioVersion !== workaroundVersion) context.warning("Check if this workaround is still needed: <description>")`.

This applies to manual-defs workarounds too. Some manual-def constructs already
warn when they no longer apply; add an ad-hoc check for the ones that don't.

## Changelog

Keep the bot's "Updated to factorio version <NEW>" bullet. Add bullets only for
consumer-visible typing changes typed-factorio introduced. Omit upstream API
changes; they're already in Factorio's changelog.

## Constraints

- Commit only: don't push, comment on the PR, merge, tag, or publish unless asked.
- No unrelated refactors.
- If something can't be resolved confidently, stop: commit what's clean and report the blocker.

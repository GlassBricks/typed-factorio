export interface Data {
  readonly raw: Record<string, Record<string, any>>

  /**
   * The `data` table expects a specific format for each item in the table. Missing properties will either fall back to
   * default values or give an error indicating what's missing. Extra properties that the game isn't looking for are
   * simply ignored.
   */
  extend(prototypes: Record<string, any>[]): void
}

/** A mapping of mod names to mod version for all enabled mods. */
export type Mods = Record<string, string>

declare module "typescript" {
  interface JSDocContainer {
    jsDoc?: JSDoc[]
  }

  interface Node {
    emitNode?: unknown
  }
}
export {}

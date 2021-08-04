declare module "typescript" {
  interface JSDocContainer {
    jsDoc?: ts.JSDoc[]
  }
  interface Node {
    emitNode?: unknown
  }
}
export {}

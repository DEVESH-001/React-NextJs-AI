// TypeScript: is a superset of JavaScript that adds static types.
// Static types help catch errors at compile time rather than runtime.
// Some of static types in TypeScript include:
// - number
// - string
// - boolean
// - object
// - array
// - tuple
// - enum
// - any
// - void

// - TypeScript never runs in the browser; it is compiled to JavaScript.

// Typescript -> Lexer -> Parser -> Binder -> Checker -> Emmiter -> .js, .d.ts, .map
// Lexer : //   - Tokenizes the source code into meaningful symbols.
// Parser : //   - Parses the tokens into an Abstract Syntax Tree (AST).
// Binder : //   - Binds identifiers to their declarations.
// Checker : //   - Checks for type errors and ensures type safety.
// Emmiter : //   - Emits the final JavaScript code, along with type definitions (.d.ts) and source maps (.map).

function greet(name: string): string {
  return `Hello, ${name}`;
}
console.log(greet("Devesh"));

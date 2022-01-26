## TypeScript definitions for Spelunky 2 lua scripts

Use with [TypeScriptToLua](https://typescripttolua.github.io/)

Declarations in the file `spel2_declarations.d.ts`, I will look how to share this as npm package later

## Notes:
Make sure to add the TypescriptToLua language extensions, since some declarations use those (LuaTable and LuaMultiReturn)

```diff
{
  "compilerOptions": {
+    "types": ["typescript-to-lua/language-extensions"]
  }
}
```

For classes with constructor like AABB and Color, use .new() instead of new
import { defineConfig } from "tsup";

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.ts'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
})

// These configurations collectively define how Tsup should bundle our TypeScript code, specifying the entry point, output formats, generation of declaration files, shimming, skipping node_modules bundling, and cleaning the output directory.
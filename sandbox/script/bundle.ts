await Bun.build({
    entrypoints: ["./src/main.js"],
    outdir: "./build",
    minify: true,
    //sourcemap: "external",
    plugins: [ /* ... */ ]
  })
import Bun from "bun"

let bundle = await Bun.build({
    entrypoints: ["./src/main.ts"],
    outdir: "./build",
    minify: true,
    //sourcemap: "external",
    plugins: [ /* ... */ ]
  })

if (!bundle.success) {
  console.log(bundle)
}

export {}
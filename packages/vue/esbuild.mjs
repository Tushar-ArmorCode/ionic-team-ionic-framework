import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    './src/**/*.ts'
  ],
  bundle: false,
  sourcemap: true,
  outdir: 'dist',
})

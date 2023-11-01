import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  bundle: false,
  sourcemap: true,
  outdir: 'dist',
})

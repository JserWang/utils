import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: './packages/index.ts',
    plugins: [
      typescript({
        exclude: 'node_modules/**',
        typescript: require('typescript'),
      }),
    ],
    output: [
      {
        format: 'cjs',
        file: 'dist/index.js',
        inlineDynamicImports: true,
      },
    ],
  },
]

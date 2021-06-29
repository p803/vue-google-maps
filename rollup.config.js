import alias from '@rollup/plugin-alias'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const input = 'src/index.ts'

const aliasOptions = {
  entries: [
    // eslint-disable-next-line node/no-path-concat
    { find: /^@\/(.*)/, replacement: `${__dirname}/src/$1` }
  ]
}

export default [
  {
    input,
    output: [
      {
        // Modern format.
        file: pkg.module,
        format: 'es'
      },
      {
        // Fallback format.
        file: pkg.main,
        format: 'umd',
        name: 'VueGoogleMaps',
        globals: {
          '@googlemaps/js-api-loader': 'jsApiLoader',
          vue: 'Vue'
        }
      }
    ],
    plugins: [
      alias(aliasOptions),
      typescript(),
      vue()
    ],
    external: [
      '@googlemaps/js-api-loader',
      'vue'
    ]
  },
  {
    // Standalone format.
    input,
    output: {
      file: pkg.unpkg,
      format: 'iife',
      name: 'VueGoogleMaps',
      globals: {
        vue: 'Vue'
      }
    },
    plugins: [
      alias(aliasOptions),
      resolve(),
      terser(),
      typescript(),
      vue()
    ],
    external: [
      'vue'
    ]
  }
]

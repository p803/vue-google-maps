import alias from '@rollup/plugin-alias'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import { module, main, unpkg } from './package.json'

const input = 'src/index.ts'

const aliasOptions = {
  entries: [
    { find: /^@\/(.*)/, replacement: path.resolve(__dirname, 'src', '$1') }
  ]
}

export default [
  {
    input,
    output: [
      {
        // Modern format.
        file: module,
        format: 'es'
      },
      {
        // Fallback format.
        file: main,
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
      file: unpkg,
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

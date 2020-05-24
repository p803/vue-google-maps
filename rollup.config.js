import babel from '@rollup/plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const input = 'src/index.js';

export default [
    {
        input,
        output: [
            {
                // Modern format.
                file: pkg.module,
                format: 'es',
            },
            {
                // Fallback format.
                file: pkg.main,
                format: 'umd',
                name: 'VueGoogleMaps',
                globals: {
                    '@babel/runtime/regenerator': '_regeneratorRuntime',
                    '@p803/google-maps-api': 'p803.googleMapsApi',
                },
            },
        ],
        plugins: [
            commonjs(),
            vue(),
            babel({
                babelHelpers: 'runtime',
                plugins: [
                    '@babel/transform-runtime',
                ],
            }),
        ],
        external: [
            '@p803/google-maps-api',
            '@babel/runtime/regenerator',
            'regenerator-runtime/runtime',
            'core-js/modules/es.array.map',
        ],
    },
    {
        // Standalone version.
        input,
        output: {
            file: pkg.unpkg,
            format: 'iife',
            name: 'VueGoogleMaps',
        },
        plugins: [
            builtins(),
            resolve(),
            commonjs(),
            vue(),
            babel({
                babelrc: false,
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
            }),
            terser(),
        ],
    },
];

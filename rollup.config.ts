import { readFileSync } from 'fs';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import copy from 'rollup-plugin-copy';
import filesize from 'rollup-plugin-filesize';
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';
import { visualizer } from 'rollup-plugin-visualizer';
import replace from './rollupPlugins/replace';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

const env = process.env.NODE_ENV || 'production';
const production = env === 'production';

// todo build dev mode https://rollupjs.org/guide/en/#--environment-values
// todo style strategy
const rollupConfiguration = [
	{
		input: ['./src/index.tsx'],
		external: [...Object.keys(pkg.peerDependencies || {}), /@babel\/runtime/],
		output: [
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: !production,
			},
			{
				file: pkg.module,
				format: 'es',
				exports: 'named',
				sourcemap: !production,
			},
		],
		plugins: [
			nodeResolve(),
			commonjs({
				sourceMap: !production,
			}),
			babel({
				exclude: 'node_modules/**',
				presets: ['@babel/preset-react', ['@babel/preset-env']],
				babelrc: false,
				babelHelpers: 'runtime',
				plugins: ['@babel/plugin-transform-runtime'],
			}),
			replace({
				preventAssignment: true,
				// todo this is temporal
				'?commonjs-external': '',
			}),
			postcss({
				extract: true,
				modules: false,
				use: ['sass'],
			}),
			typescript({
				sourceMap: !production,
				inlineSources: !production,
				target: 'es6',
			}),
			production && terser(),
			filesize(),
			visualizer({
				gzipSize: true,
				brotliSize: true,
			}),
			copy({
				targets: [{ src: './src/fonts/*', dest: 'dist/fonts/' }],
			}),
			json({
				/**
				 * tr46 package contains a JSON dependency which causes the rollup build to fail. Adding the
				 * json plugin resolves the issue. Hence, we are only targetting the specific module here.
				 */
				include: ['node_modules/tr46/**'],
			}),
			/**
			 * To overcome the following error, we are adding the polyfills plugin:
			 * "BREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.
			 * This is no longer the case. Verify if you need this module and configure a polyfill for it."
			 */
			nodePolyfills(),
		],
	},
];

export default rollupConfiguration;

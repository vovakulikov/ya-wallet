
const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devServer');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/uglifyJS');
const webpack = require('webpack');
const images = require('./webpack/images');
const es6 = require('./webpack/babelES6');
const definePROD = require('./webpack/defineProd');
const gzip = require('./webpack/gzip');
const preactCompact = require('./webpack/preact-compact');

const PATHS = {
	src: path.join(__dirname, 'source/client'),
	build: path.join(__dirname, 'dist'),
};

function getExternals() {
	return fs.readdirSync('node_modules')
		.concat(['react-dom/server'])
		.filter((mod) => mod !== '.bin')
		.reduce((externals, mod) => {
			externals[mod] = `commonjs ${mod}`;
			return externals;
		}, {});
}


const common = merge([
	{
		entry: {
			index: [
				'react-hot-loader/patch',
				`${PATHS.src}/index.js`],
			vendor: ['react', 'react-dom'],
		},
		output: {
			//path: PATHS.build,
			path: path.resolve(__dirname, 'public'),
			filename: 'js/[name].js',
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: `${PATHS.src}/index.html`,
				filename: 'index.html',
				inject: 'body',
			}),
			new webpack.optimize.CommonsChunkPlugin({
				names: ['vendor', 'manifest']
			}),
		],

	},
	es6(),
	images(),
]);

const serverReact = merge([
	{
		target: 'node',
		externals: getExternals(),
		entry: `${PATHS.src}/components/App.js`,
		output: {
			path: path.resolve(__dirname, 'public'),
			filename: 'js/ssr-[name].js',
			publicPath: '/',
			libraryTarget: 'commonjs2',
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						presets: ["env", "es2015", "react"],
						plugins: [
							"emotion",
							["import", {libraryName: "antd", style: "css"}]
						],
					}
				},
				{
					test: /\.css$/,
					loader: 'ignore-loader'
				}
			]
		}
	},
	definePROD()
]);

module.exports = function (env) {
	if (env === 'production') {
		const clientBuild = merge([
			common,
			definePROD(),
			extractCSS(),
			uglifyJS(),
		]);

		// возвращаем два конфига для сборки клиента и ssr
		return [clientBuild, serverReact];
	}
	if (env === 'development') {
		return merge([
			common,
			devserver(),
			sass(),
			css(),
		]);
	}
};

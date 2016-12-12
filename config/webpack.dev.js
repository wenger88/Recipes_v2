
var helpers = require('./helpers');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');


/**
 * Webpack Constants
 */
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const API_URL = process.env.API_URL = 'http://localhost:3000';
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig.metadata, {
    host: 'localhost',
    API_URL: API_URL,
    port: 8080,
    ENV: ENV,
    HMR: HMR
});

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',

	output: {
		path: helpers.root('dist'),
		publicPath: 'http://localhost:8080/',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js'
	},

	plugins: [
		new ExtractTextPlugin('[name].css'),
        // NOTE: when adding more properties, make sure you include them in custom-typings.d.ts
        new DefinePlugin({
            'ENV': JSON.stringify(METADATA.ENV),
            'API_URL': JSON.stringify(METADATA.API_URL),
            'HMR': METADATA.HMR,
            'process.env': {
                'ENV': JSON.stringify(METADATA.ENV),
                'NODE_ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR,
                'API_URL' : JSON.stringify(METADATA.API_URL),
            }
        })
	],

	devServer: {
		historyApiFallback: true,
		stats: 'minimal'
	}
});
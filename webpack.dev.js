const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: {
            paths: ['src/index.html', './src/index.js'],
            options: {
              usePolling: false,
        }
        },
    },
    //optimization: {
    //    runtimeChunk: 'single',
    //  },
});
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const openBrowser = require('react-dev-utils/openBrowser');

const host = process.env.HOST || 'localhost';
const port = parseInt(process.env.PORT, 10) || 3000;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
    onListening: () => {
      openBrowser(`http://${host}:${port}`);
    },
    port,
    host,
  },
});

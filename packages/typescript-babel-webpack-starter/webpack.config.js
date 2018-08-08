const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const babelLoader = require.resolve('babel-loader');
const fileLoader = require.resolve('file-loader');

const dev = process.env.NODE_ENV !== 'production';

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [path.join(__dirname, 'src', 'app.tsx')],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist')
  },
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'inline-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        loader: babelLoader
      },
      {
        test: /\.(jpe?g|png|gif|svg|pdf)$/i,
        loader: fileLoader,
        options: {
          name: '[name].[hash:8].[ext]',
          outputPath: 'assets/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    // sp the public folder is also recognized in dev, you have to copy it on your own for production use!
    contentBase: path.join(__dirname, 'public'),
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    historyApiFallback: true
  },
  plugins: dev
    ? [HTMLWebpackPluginConfig, new webpack.HotModuleReplacementPlugin()]
    : [
        HTMLWebpackPluginConfig,
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ]
};

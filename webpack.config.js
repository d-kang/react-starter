const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const fs = require('fs');

module.exports = [
  {
    entry: [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      'babel-polyfill',
      './src/index.jsx',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
    devtool: 'eval',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      compress: true,
      port: 1000,
      stats: 'errors-only',
      open: false,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
  },
  // {
  //   target: 'node',
  //   externals: [nodeExternals()],
  //   entry: ['babel-polyfill', './server/index.js'],
  //   output: {
  //     filename: 'backend-bundle.js',
  //     path: path.resolve(__dirname, 'build'),
  //   },
  //   devtool: 'eval',
  //   resolve: {
  //     extensions: ['.js'],
  //   },
  //   module: {
  //     rules: [
  //       {
  //         test: /\.js$/,
  //         exclude: /(node_modules|bower_components)/,
  //         use: {
  //           loader: 'babel-loader',
  //         },
  //       },
  //     ],
  //   },
  // },
];

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/index.js',
  },

  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: '/',
  },

  // optimization: {
  //     splitChunks: {
  //         cacheGroups: {
  //             vendor: {
  //                 test: /node_modules/,
  //                 chunks: "initial",
  //                 name: "vendor",
  //                 enforce: true
  //             }
  //         }
  //     }
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [['@babel/preset-env', { modules: false }]],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
    ],
  },

  resolve: {
    alias: {
      '%ui%': path.resolve(__dirname, 'src/js/import/chunks'),
      '%modules%': path.resolve(__dirname, 'src/blocks/modules'),
      '%components%': path.resolve(__dirname, 'src/blocks/components'),
    },
  },
};

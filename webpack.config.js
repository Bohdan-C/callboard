const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const jsPath = '/';
const distPath = './dist';
const srcPath = path.join(__dirname, jsPath);
const outputPath = path.join(__dirname, distPath);

module.exports = {
  optimization: {
    minimize: false,
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  entry: {
    test: [path.join(srcPath, '/index.js')],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 3000,
    historyApiFallback: true,
    open: true,
    openPage: '',
    proxy: {
      '/api': 'http://yourBackendDomainNameOrIpAdress',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
  ],
  context: srcPath,
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8192',
      },
    ],
  },
};

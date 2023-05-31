// Webpack Common Config
const { ProgressPlugin } = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const paths = require('./paths')
const APP_INFO = require('../_info')

module.exports = {
  entry: [`${paths.src}/index.tsx`],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.(jpe?g|png|gif|webp|avif)$/i,
        type: 'asset/resource',
      },
      { test: /\.img.svg$/i, type: 'asset/resource' },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      { test: /\.(woff(2)?|eot|ttf|otf)$/, type: 'asset/resource' },
      { test: /\.txt$/, type: 'asset/source' },
    ],
  },

  plugins: [
    new ProgressPlugin({ percentBy: 'entries' }),
    new CleanWebpackPlugin(paths.dist),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: `${paths.src}/template.ejs`,
      templateParameters: APP_INFO,
      filename: 'index.html',
      inject: 'body',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
    plugins: [new TsconfigPathsPlugin()],
  },
}

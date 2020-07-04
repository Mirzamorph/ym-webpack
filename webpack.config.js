const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = (env, argv) => {
  const isDev = argv.mode === 'development'
  return {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    devtool: isDev && 'source-map',
    devServer: {
      contentBase: './dist',
      clientLogLevel: 'silent'
    },
    resolve: {
      extensions: ['.js', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html"
      }),
      new MiniCssExtractPlugin()
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(scss|sass)$/,
          include: path.resolve(__dirname, 'src/css'),
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev,
                reloadAll: true
              }
            },
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    output: {
      filename: '[name].js'
    }
  }
}
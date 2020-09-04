import webpack from 'webpack';
import * as paths from './paths.config'
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin') // 优化构建时命令行的显示日志
const isDev = process.argv.includes('--dev') // 是否属于开发环境

const webpackConfig: webpack.Configuration = {
  mode: isDev ? 'development' : 'production', // 开发环境 || 生产环境
  devtool: isDev ? 'cheap-eval-source-map' : 'cheap-module-source-map', // 生成资源映射,迅速定位到错误位置，
  entry: {
    main: ['react-hot-loader/patch', './src/homepage/index.tsx'],
  },
  output: {
    path: paths.BUILD_DIR,
    filename: 'scripts/[name].js',
    chunkFilename: 'scripts/[name].js',
    publicPath: ''
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      // Allow absolute paths in imports, e.g. import Button from '~/components/Button'
      // Keep in sync with tsconfig.json
      '~': paths.SRC_DIR,
      'react-dom': '@hot-loader/react-dom'
    },
    // plugins: [
    //   new TsconfigPathsWebpackPlugin({
    //     configFile: paths.SRC_DIR,
    //   }),
    // ],
  },
  // yarn add @babel/core babel-loader -D，然后在webpack的module配置项下进行配置​​
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'cache-loader',
          },
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              babelrc: false,
              plugins: ['@babel/plugin-syntax-dynamic-import', 'react-hot-loader/babel'],
            },
          },
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                module: 'esNext', // for Tree-shaking
                sourceMap: isDev,
              },
            },
          },
        ],
        include: paths.SRC_DIR,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          isDev ? 'style-loader' :
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },

          {
            loader: 'cache-loader',
          },

          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev ? true : false, // 启用/禁用 Sourcemap
              modules:{
                localIdentName: isDev ? '[name]-[local]-[hash:base64:5]' : '[hash:base64:5]', // 配置生成的标识符
              },
              importLoaders: 2, // 在css-loader前应用的loader数量
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev ? true : false, // 启用/禁用 Sourcemap
              sassOptions: {
                includePaths: [paths.STYLES_DIR],
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')],
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[name].[hash:8].[ext]',
          outputPath: 'images/',
        },
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'fonts/',
        },
      },
      {
        test: /\.(avi|mp3|mp4|mpg|ogg|wav|wmv)$/,
        loader: 'file-loader',
        options: {
          name: '[hash].[ext]',
          outputPath: 'media/',
        },
      },
    ]
  },
  stats: 'errors-only',
  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/homePage/index.html',
      minify: {
        // 是对html文件进行压缩
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true, // 去掉属性的双引号
      },
      hash: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8585, // 端口号
    host: 'localhost', // 主机号
    contentBase: paths.BUILD_DIR,
    // disableDotRule: false, // 禁止 url 带小数点 . 。
    historyApiFallback: { // 应对返回404页面时定向到特定页面
      // rewrites: [{ from: /./, to: '/404.html' }]
    },
    hot: true, // 启动热加载
    hotOnly: true, // 启动热加载
    watchOptions: { // 自定义的监听模式，用来监听文件是否被改动过。
      aggregateTimeout: 300, // 添加一个延迟。填以毫秒为单位的数字。
      poll: false, // 填以毫秒为单位的数字。每隔（你设定的）多少时间查一下有没有文件改动过。不想启用也可以填false
      ignored: /node_modules/, // 忽略文件夹
    }
  }
};

export default webpackConfig;
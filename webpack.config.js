const webpack = require("webpack");
const path = require("path");
const ExtraTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

const extractSass = new ExtraTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});
// const VENDOR = [];

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, "src/index.js")
    // vendor: VENDOR
  },
  output: {
    path: path.resolve(__dirname, "dist"), // 输出路径
    filename: "[name].[chunkhash].js", // 输出文件
    // filename: "[name].js", // 输出文件
    publicPath: "./"
  },
  resolve: {
    // 文件扩展名，写明以后不需要每个文件都写后缀
    extensions: [".js", ".css", ".json"],
    // 路径别名
    alias: {
      "@": path.resolve("src"),
      sass: path.resolve(__dirname, "styles"),
      img: path.resolve(__dirname, "images")
    }
  },
  module: {
    rules: [
      {
        // 匹配，js文件才使用babel
        test: /\.js$/,
        // 使用哪个loader
        use: "babel-loader",
        // 不包括路径
        exclude: /node_modules/
      },
      {
        // 匹配图片
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "url-loader",
            // 配置url-loader 的可选项
            options: {
              // 限制图片大小 10000B，小于限制会将图片转换为base64格式
              limit: 10000,
              // 超出限制，创建的文件格式
              // build/images/[文件名].[hash].[图片格式]
              name: "images/[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        loader: ExtraTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                modules: true
              }
            }
          ]
        })
      },
      {
        test: /\.sass$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  plugins: [
    // 输出文件路径
    // new ExtraTextPlugin("css/[name].[hash].css"),
    extractSass,
    // 抽取vendor和bundle中共同的代码
    // new webpack.optimize.CommonsChunkPlugin({
    // name: ['vendor', 'manifest'],
    // minChunks: Infinity
    // }),
    new CleanWebpackPlugin(["dist/bundle.*.js", "dist/bundle.*.css"], {
      // log
      verbose: true,
      // del
      dry: false
    }),
    new HtmlWebpackPlugin({
      template: "index.html"
    }),
    // 压缩提取出来的css, 并解决ExtracttextPlugin分离出的js重复问题
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

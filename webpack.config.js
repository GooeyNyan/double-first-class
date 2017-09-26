const webpack = require("webpack");
const path = require("path");

// plugins
const ExtraTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const OptimizeCSSPlugin = require("optimize-css-assets-webpack-plugin");

// variables
const nodeEnv = process.env.NODE_ENV || "development";
const isProduction = nodeEnv || "production";

// paths
const entryPath = path.resolve(__dirname, "src/index.js");
const buildPath = path.resolve(__dirname, "dist");
const fontsPath = path.posix.join("dist", "fonts/[name].[hash:7].[ext]");
const imgPath = path.resolve(__dirname, "images");
const srcPath = path.resolve("src");
const stylePath = path.resolve(__dirname, "styles");

// common rules
const rules = [
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
      use:
        "css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
    })
  },
  {
    test: /\.(sass|scss)$/,
    use: ExtraTextPlugin.extract({
      // Could also be write as follow:
      use:
        "css-loader?modules&importLoader=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader",
      fallback: "style-loader"
    })
  },
  {
    test: /\.(woff2?|eot|[ot]tf)(\?.*)?$/,
    loader: "url-loader",
    options: {
      limit: 10000,
      name: fontsPath
    }
  }
];

// common plugins
const plugins = [
  new CleanWebpackPlugin(["dist/bundle.*.js", "dist/bundle.*.css"], {
    // log
    verbose: true,
    // del
    dry: false
  }),
  new ExtraTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
  }),
  new HtmlWebpackPlugin({
    template: "index.html"
  })
];

if (isProduction) {
  plugins.push(
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
  );
}

module.exports = {
  entry: {
    bundle: entryPath
    // vendor: VENDOR
  },

  output: {
    path: buildPath, // 输出路径
    filename: "[name].[chunkhash].js", // 输出文件
    // filename: "[name].js", // 输出文件
    publicPath: "./"
  },

  resolve: {
    // 文件扩展名，写明以后不需要每个文件都写后缀
    extensions: [".js", ".css", ".json"],
    // 路径别名
    alias: {
      "@": srcPath,
      sass: stylePath,
      img: imgPath
    }
  },

  module: {
    rules
  },

  plugins
};

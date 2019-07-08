const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: path.resolve(__dirname, "src"),
    filename: "js/bundle.[hash].js",
    chunkFilename: "js/[name].[hash].js"
  },

  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: "./",
    inline: true,
    hot: true,
    port: 4000
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader?cacheDirectory",
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            "postcss-loader"
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader"
            },
            "sass-loader"
          ]
        })
      },
      {
        test: /\.(png|gif)$/,
        exclude: /node_modules/,
        loader: "file-loader?name=images/[name].[ext]"
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx"]
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      minSize: 10000,
      maxSize: 0,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "true"
    }),
    new ExtractTextPlugin("style.css")
  ]
};

// import * as path from "path";
import * as webpack from "webpack";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config: webpack.Configuration = {
    mode: "development",
    devServer: {
        historyApiFallback: true,
        hot: true,
    },
    entry: ["./src/index.tsx"],
    devtool: "source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: { plugins: ["react-refresh/babel"] },
                    },
                    { loader: "ts-loader" },
                ],
            },
            { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
            { test: /\.(png|svg|jpeg)$/, use: [{ loader: "file-loader", options: { outputPath: "assets/images/" } }] },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new ReactRefreshPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),
    ],
};

export default config;

var webpack = require("webpack");
var path = require("path");

var CopyWebpackPlugin = require("copy-webpack-plugin");


function getEntrySources(sources) {
    if (process.env.NODE_ENV !== "production") {
        sources.push("webpack-dev-server/client?http://localhost:8080");
        sources.push("webpack/hot/only-dev-server");
    }

    return sources;
}

module.exports = {
    entry: getEntrySources(["./src/app.js"]),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: "http://localhost:8080",
    },
    resolve: {
        extensions: ["", ".js", ".css", ".html"]
    },
    devtool: "eval",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new CopyWebpackPlugin([
            { from: "./src/index.html", to: "./index.html" },
        ]),
    ],
};
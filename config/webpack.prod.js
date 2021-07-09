const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
/**@type {import('webpack').Configuration} */
const prodConfig = {
    mode: "production",
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    // devtool:"source-map",
    optimization:{
        splitChunks:{
            chunks:"all",
        },
    },
    plugins:[new MiniCssExtractPlugin()],
    module:{
        rules: [
            {
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
                test: /.(css|sass|scss)$/,
            },
        ]
    }
};

module.exports = merge(common, prodConfig);
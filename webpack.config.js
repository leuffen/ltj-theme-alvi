const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {


        'showcase/joda-dev': './showcase/joda-dev.ts',
        'showcase/index': './showcase/index.ts'
    },
    cache: true,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: "ts",
                        }
                    }
                ],

                include: [
                    path.resolve(__dirname, "src"),
                    path.resolve(__dirname, "workspaces"),
                    path.resolve(__dirname, "theme")
                ]
            },
            {
                enforce: 'pre',
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader", "css-loader", 'sass-loader'],
                include: path.resolve(__dirname, "")
            },


        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".scss", ".css"],
    },
    devtool: 'source-map',
    mode: "development",
    //mode: "production",
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
        },
        compress: true,
        port: 4000,
    },
    plugins: [

    ],

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};

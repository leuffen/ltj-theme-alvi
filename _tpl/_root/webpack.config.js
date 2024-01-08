const path = require('path');

module.exports = {
    entry: {


        '_includes/dist/embed': './src/embed.ts',
        'assets/dist/index': './src/index.ts'
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
                    path.resolve(__dirname, "workspaces")
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
        extensions: ['.tsx', '.ts', '.js'],
    },

    //devtool: "eval",
    // switch to: 'development' to debug
    mode: "production",



    optimization: {
        minimize: true,
        usedExports: "global"
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'docs/'),
    },
};

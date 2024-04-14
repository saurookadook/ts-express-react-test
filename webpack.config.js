// Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require('path');
// // const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackAssetsManifest = require('webpack-assets-manifest');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackAssetsManifest from 'webpack-assets-manifest';
import WorkboxWebpackPlugin from 'workbox-webpack-plugin';

const isProduction = (envVar) => envVar == 'production';

const __dirname = path.resolve();

const babelOptions = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        // '@babel/preset-typescript',
        // 'react',
        // [
        //     'es2015',
        //     {
        //         modules: false,
        //     },
        // ],
        // 'es2016',
    ],
};

const buildConfig = (env, argv) => ({
    context: path.resolve(__dirname),
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        open: true,
        port: 9229,
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
    },
    entry: {
        'react-vendors': ['@babel/polyfill', 'react', 'react-dom'],
        home: {
            import: path.resolve(__dirname, './src/client/home/entry.tsx'),
            dependOn: 'react-vendors',
        },
        // login: {
        //     import: path.resolve(__dirname, './src/client/login/entry.tsx'),
        //     dependOn: 'react-vendors',
        // },
        // home: ['@babel/polyfill', path.resolve(__dirname, 'src/client/home/entry.tsx')],
        // login: ['@babel/polyfill', path.resolve(__dirname, 'src/client/login/entry.tsx')],
    },
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/bundles'),
        filename: '[name]-[chunkhash].min.js',
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions,
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: babelOptions,
                    },
                ],
            },
            // {
            //     test: /\.(ts|tsx)$/i,
            //     exclude: ['/node_modules/'],
            //     loader: 'ts-loader',
            // },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    // optimization: {
    //     splitChunks: {
    //         commonVendors: {
    //             test: /^.*node_modules[\/\\](?!).*$/,
    //             name: 'nlpssaVendor',
    //             chunks: 'initial'
    //         },
    //         commons: {
    //             test: /[\/\\]src\/common[\/\\]/,
    //             name: 'nlpssaCommon',
    //             chunks: 'initial',
    //             enforce: true,
    //         }
    //     },
    //     minimizer: argv.mode === 'production' ? [new TerserPlugin()] : []
    // },
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    plugins: getPlugins(argv.mode),
    resolve: {
        alias: {
            client: path.resolve(__dirname, './src/client'),
            server: path.resolve(__dirname, './src/server'),
            types: path.resolve(__dirname, './src/types'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
    },
});

function getPlugins(mode) {
    const commonPlugins = [
        // new HtmlWebpackPlugin({
        //     template: path.resolve(__dirname, 'index.html'),
        // }),
        new WebpackAssetsManifest({}),
    ];

    return isProduction(mode) ? [...commonPlugins, new WorkboxWebpackPlugin.GenerateSW()] : [...commonPlugins];
}

// module.exports = (env, argv) => {
export default (env, argv) => {
    const config = buildConfig(env, argv);

    // if (isProduction) {
    //     config.mode = 'production';
    //     config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
    // } else {
    //     config.mode = 'development';
    // }

    return config;
};

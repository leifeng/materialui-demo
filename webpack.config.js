var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


var basewepback = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: []
}

if (process.env.NODE_ENV === 'production') {
    console.log('生产')
    basewepback.entry = {
        vendor: ["react", "react-dom", "react-router-dom", "react-router"],
        app: ['./app.js']
    }
    basewepback.devtool = "cheap-module-source-map";
    basewepback.module.rules.push({
        test: /\.css/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: {
                loader: 'css-loader',
                options: {
                    modules: true,
                    localIdentName: '[path][name]_[local]',
                    sourceMap: true,
                    importLoaders: 1
                }
            }
        })
    })
    basewepback.plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.min.js',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        }),
        new ExtractTextPlugin({
            filename: 'styles.css',
            disable: false,
            allChunks: true
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        })
    ]

} else {
    console.log('开发')
    let DashboardPlugin = require('webpack-dashboard/plugin');
    let Dashboard = require('webpack-dashboard');
    let dashboard = new Dashboard();

    basewepback.entry = [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://10.60.10.115:8000',
        'webpack/hot/only-dev-server',
        './app.js'
    ]
    basewepback.module.rules.push({
        test: /\.css/,
        exclude: /node_modules/,
        use: ['style-loader', {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[path][name]_[local]',
                sourceMap: true,
                importLoaders: 1
            }
        }]
    })
    basewepback.devtool = "cheap-module-eval-source-map";
    basewepback.devServer = {
        publicPath: '/',
        host: '10.60.10.115',
        port: 8000,
        hot: true,
        quiet: true,
        historyApiFallback: true
    }
    basewepback.plugins = [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new DashboardPlugin(dashboard.setData)
    ]
}
module.exports = basewepback


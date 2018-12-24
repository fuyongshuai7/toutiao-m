var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: {
        toutiao: path.resolve(__dirname, "src", "js", 'toutiao.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[name].bundle.js",
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: ["./src"],//根目录
        hot: true,//热更新
        open: true,//npm run 自动打开页面
        inline: true,
        port: 9000,
        historyApiFallback:{//无法访问页面时备案
            rewrites:[
                {
                    from:/^\/$/,
                    to:'/pages/toutiao.html'
                }
            ]
        },
        // proxy: {
        //     "/v1/*": {
        //         "target": "http://www.googel.com",//输出http://www.google.com/v1/*
        //         "changOrigin": true,//有没有换域
        //         "secure": false,//接受运行在 HTTPS 上，且使用了无效证书的后端服务器
        //     },
        // }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,//正则
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'env', 'stage-2'],
                        plugins: [
                            'add-module-exports',
                            'transform-object-assign',
                            'transform-decorators-legacy',
                            'transform-es3-member-expression-literals',
                            'transform-es3-property-literals'
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                autoprefixer({
                                    browsers: [
                                        'last 3 versions',
                                        '> 1%',
                                        'not ie <=8'
                                    ]
                                })]
                        }
                    }
                ]
            },
            {
                test:/\.ejs$/,
                exclude:/node_modules/,
                use:{
                    loader:"ejs-webpack-loader"
                }
            }
        ]
    },
    //插件配置
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'pages/toutiao.html',//输出的页面路径
            template: path.resolve(__dirname, 'src', 'pages', 'toutiao.html'),//页面模板
            inject: true,
        })
    ],
}


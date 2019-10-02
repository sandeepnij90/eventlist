const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const tsconfigPlugin = require('tsconfig-paths-webpack-plugin')
const extractTextPlugin = require('extract-text-webpack-plugin')
const extractPlugin = new extractTextPlugin({
    filename: 'index.css'
})

module.exports = {
    entry: path.resolve(__dirname, 'src/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    resolve:{
        extensions: ['.tsx', '.ts', '.js'],
        plugins:[new tsconfigPlugin({
            configFile: './tsconfig.json'
        })]
    },
    module: {
        rules:[
            {
                test: /\.tsx$/,
                use:['ts-loader']
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test:/\.scss/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    }, plugins:[
        extractPlugin,
        new htmlPlugin({
            template: 'src/index.html'
        })
    ]
}
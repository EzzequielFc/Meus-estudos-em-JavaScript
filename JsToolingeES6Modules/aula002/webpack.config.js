// WebPack

// npm init -y
// npm i --save-dev @babel/preset-env @babel/core @babel/cli babel-loader webpack webpack-cli regenerator-runtime core-js@2

// Criar arquivo wepack.config.js


// Requisitando path
const path = require('path') // commonJs

// Exportar todos os modulos para usarmos em outros lugares
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public','assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.js$/,
            use: {
                loader:'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
}
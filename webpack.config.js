const path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: "production",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.ttf$/i,
                type: "asset/resource"
            }
        ],
    },
}
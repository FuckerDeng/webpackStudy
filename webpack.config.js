const path = require('path');
module.exports = {
    entry: './src/js/entry.js',
    output: {
        path: path.resolve(__dirname, './dist/js'),
        filename: 'bund.js'
    },
    mode: 'development', // 设置mode
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            }
        ]
    }
}
const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: '',
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_moules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devtool: 'source-map',
    mode: 'development'
}

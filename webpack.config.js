module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
    },
    module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015', 'stage-0'],
                        plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
                    }
                },
                {
                    test: /\.css$/, // Only .css files
                    loader: 'style!css' // Run both loaders
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"
                },
                {
                    test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
                }
            ]
    }
}
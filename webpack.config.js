const path = require('path');

module.exports = {
    entry: './src/widget.js',
    output: {
        filename: 'widget.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'MyWidgetLibrary',
        libraryTarget: 'umd',
    },
    mode: 'production',
};

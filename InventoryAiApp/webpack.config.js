const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development', // Set to 'production' for production builds
    entry: {
        'styles': './wwwroot/css/styles.css', // Entry point for CSS
        'custom': './wwwroot/js/custom.js'  // Entry point for JavaScript
      },
    output: {
        path: path.resolve(__dirname, 'wwwroot/dist'),
        filename: '[name].js'  // This will output custom.js and any other bundles
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // Extracts CSS into separate files
                    'css-loader', // Translates CSS into CommonJS
                    'postcss-loader', // Processes CSS with PostCSS
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader" // Use Babel for transpiling JavaScript
                }
              },
              {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
              }

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css', // The output CSS file name
        }),

    ],
};

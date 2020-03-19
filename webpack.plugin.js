const sizeAnalyzer = require('webpack-bundle-size-analyzer')
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: './src/plugin/index.ts',
  mode: isDev ? 'development' : 'production',
  // devtool: 'inline-source-map',
  plugins: [
    new sizeAnalyzer.WebpackBundleSizeAnalyzerPlugin(
      '.webpack.plugin.txt'
    )
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compiler: 'ttypescript',
              configFile: 'src/plugin/tsconfig.json'
            }
          }
        ],
        exclude: /node_modules/,
        
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
          },
        ]
      },
      {
        test:/\.pug$/,
        use: 'pug-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'manifest.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
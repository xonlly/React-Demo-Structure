
module.exports = {
  entry: "./src/index.js",
  output: {
      path: __dirname,
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /(node_modules|\.tmp)/,
          loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-0', 'react'],
              // plugins: ['transform-runtime'],
          }
      },
      {
          test: /\.jsx$/,
          exclude: /(node_modules|\.tmp)/,
          loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'stage-0', 'react'],
              // plugins: ['transform-runtime'],
          }
      }
    ]
  }
}

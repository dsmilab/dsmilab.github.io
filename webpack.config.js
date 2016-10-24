var path = require('path');
var DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
  entry: "./entry.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
      test: /\.(jpe?g|png|gif|svg)$/i, 
      loader: "file-loader?name=[path][name].[ext]"
    },
    {
      test: /\.json$/, 
      loader: "json-loader"
    },
    { 
      test: [/\.css$/],
      exclude: /node_modules/,
      loader: 'style!css'
    },
    { 
      test: [/\.js$/, /\.jsx$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015'] 
      }
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new DashboardPlugin()
  ]
};

const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  mode: 'development',
  target: 'node',
  entry: {
    // 'canvas.js': './canvas.js',
    // 'client.js': './client.js',
    // 'bundle.js': './bundle.js',
    'drive.js': './drive.js',
    // 'webWorkers.main.js' : './webWorkers.main.jsx',
    // 'webWorkers.worker.js' : './webWorkers.worker.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    'node': 'current'
                  }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    'node': 'current'
                  }
                }
              ],
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: {
          loader: 'json-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

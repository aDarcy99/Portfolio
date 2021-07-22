module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|woff|woff2|eot|}ttf|svg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }]
    })
    return config
  },
}
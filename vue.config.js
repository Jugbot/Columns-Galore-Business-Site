const { staticRoutes, dynamicRoutes } = require('./src/router/routes')
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  lintOnSave: false,

  configureWebpack: {
    plugins: [
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.js$|\.css$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
      }),
      new CompressionPlugin({
        filename: '[path].br[query]',
        algorithm: 'brotliCompress',
        test: /\.(js|css|html|svg)$/,
        compressionOptions: {
          level: 11
        },
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },

  pluginOptions: {
    sitemap: {
      baseURL: 'https://www.columnsgalore.com',
      routes: staticRoutes, // [...staticRoutes, ...dynamicRoutes],
      outputDir: './dist',
      pretty: true,
      productionOnly: false
    },
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
    prerenderSpa: {
      registry: undefined,
      // renderRoutes: staticRoutes.map(o => o.path),
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

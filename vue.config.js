const { staticRoutes, dynamicRoutes } = require('./src/router/routes')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  lintOnSave: false,

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

const { staticRoutes } = require('./src/router/routes')

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  lintOnSave: false,

  pluginOptions: {
    sitemap: {
      baseURL: 'https://www.columnsgalore.com',
      routes: staticRoutes,
      outputDir: './public',
      pretty: true,
      productionOnly: false
    },
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: staticRoutes.map(o => o.path),
      // [
      //   '/',
      //   '/about',
      //   '/catalog',
      //   '/rebuiltcolumns',
      //   '/columnparts',
      //   '/coloroptions',
      //   '/techsupport',
      //   '/payment',
      //   '/quote'
      // ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

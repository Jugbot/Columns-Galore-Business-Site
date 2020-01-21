
module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  lintOnSave: false,

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [ '/',
        '/about',
        '/catalog',
        '/rebuiltcolumns',
        '/columnparts',
        '/coloroptions',
        '/techsupport',
        '/payment',
        '/part/1',
        '/quote' ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  lintOnSave: false,

  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv'
    }
  }
}

import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#EF5B5B',
        secondary: '#23001E',
        accent: '#235789',
        error: '#FFBA49',
        info: '#FFBA49',
        success: '#FFBA49',
        warning: '#FFBA49'
      }
    }
  }
})

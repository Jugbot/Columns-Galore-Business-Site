<template>
  <v-app>
    <v-content>
      <v-col class="pa-0">
        <v-container>
          <v-row justify="center">
            <v-flex xs12 md2 px-1>
              <v-img :src="require('./assets/logo.gif')" />
            </v-flex>
            <v-flex shrink>
              <v-row no-gutters class="fill-height" align="center">
                <v-flex>
                  <h2>Your complete steering column source.</h2>
                  <h3>Steering Columns And Parts Shipped Worldwide</h3>
                  <v-row no-gutters class="accent--text">
                    <h3>Toll Free 888-326-5866</h3>
                    <div class="px-1">&mdash;</div>
                    <h3>Satisfaction Guarunteed</h3>
                  </v-row>
                </v-flex>
              </v-row>
            </v-flex>
          </v-row>
        </v-container>
        <v-tabs centered>
          <template v-for='{name, page} in pages.primary'>
            <v-tab :key='name' :to='page'>{{name}}</v-tab>
          </template>
          <v-menu offset-y>
            <template #activator="{on}">
              <v-tab v-on="on">Other</v-tab>
            </template>
            <v-list>
              <template v-for='{name, page} in pages.secondary'>
                <v-list-item :key="name" :to='page'>
                  <v-list-item-title>{{name}}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </v-tabs>
      </v-col>

      <router-view></router-view>

    </v-content>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    pages: {
      primary: [
        { name: 'Home', page: '/' },
        { name: 'Rebuilt Columns', page: 'RebuiltColumns' },
        { name: 'Column Parts', page: 'ColumnParts' },
        { name: 'Mobile Service', page: 'MobileService' },
        { name: 'Catalog', page: 'Catalog' }
      ],
      secondary: [
        { name: 'About', page: 'About' },
        { name: 'Contact', page: 'Contact' },
        { name: 'Support', page: 'Support' },
        { name: 'Paint', page: 'Paint' },
        { name: 'Track Order', page: 'TrackOrder' },
        { name: 'Payment', page: 'Payment' }
      ]
    }
  })
}
</script>

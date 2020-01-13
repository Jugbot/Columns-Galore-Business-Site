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
              <v-row no-gutters class="fill-height mx-3" align="center">
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

        <v-tabs centered show-arrows>
          <template v-for="{name, page} in pages.primary">
            <v-tab :key="name" :to="page">{{name}}</v-tab>
          </template>
          <v-menu offset-y>
            <template #activator="{on}">
              <v-tab v-on="on">Other</v-tab>
            </template>
            <v-list>
              <template v-for="{name, page} in pages.secondary">
                <v-list-item :key="name" :to="page">
                  <v-list-item-title>{{name}}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-menu>
        </v-tabs>

      </v-col>

      <router-view></router-view>

    </v-content>

    <v-footer app absolute color="white">
      <v-container>
        <v-row justify="space-around">
          <v-col sm="12" md="auto">
            <v-card outlined class="pa-3 fill-height">
              <v-card-title>Phone</v-card-title>
              <v-card-text style>
                <p v-for="({name, number}, i) in phoneNumbers" :key="i">
                  {{name}}
                  <a :href="toCallable(number)" style="float:right" class="ml-2">{{number}}</a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col sm="12" md="auto">
            <v-card outlined class="pa-3 fill-height">
              <v-card-title>Shipping & Mailing</v-card-title>
              <v-card-text>
                <p>Steering Columns Galore Inc.</p>
                <p>5 Progress Street</p>
                <p>Brewster, NY 10509</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col sm="12" md="auto">
            <v-card outlined class="pa-3 fill-height">
              <v-card-title>Email</v-card-title>
              <v-card-text>
                <p>
                  <a href="mailto:techsupport@columnsgalore.com">techsupport@columnsgalore.com</a>
                </p>
                <p>
                  <a href="mailto:salesteam@columnsgalore.com">salesteam@columnsgalore.com</a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col sm="12" md="auto">
            <v-card outlined class="pa-3 fill-height">
              <v-card-title>Hours of Operation (EST)</v-card-title>
              <v-card-actions>
                <v-simple-table dense>
                  <tbody>
                    <tr v-for="({day, start, end}, i) in hours" :key="i">
                      <td>{{day}}</td>
                      <td>{{start}}</td>
                      <td>{{end}}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col sm="12" md="auto">
            <v-card outlined class="fill-height">
              <v-card-actions class='pa-0'>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.03556457633!2d-73.62045168448964!3d41.3950340034838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd52e5ff79a0cb%3A0x487f9a4fb8e078ea!2sSteering%20Columns%20Galore%20Inc.!5e0!3m2!1sen!2sus!4v1578945739765!5m2!1sen!2sus"
                  width="400"
                  height="300"
                  frameborder="0"
                  style="border:0;"
                  allowfullscreen
                ></iframe>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<style>
.v-content__wrap {
  min-height:100vh
}
</style>

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
        { name: 'Catalog', page: 'Catalog' }
      ],
      secondary: [
        { name: 'About', page: 'About' },
        { name: 'Contact', page: 'Contact' },
        { name: 'Tech Support', page: 'TechSupport' },
        { name: 'Color Options', page: 'ColorOptions' },
        { name: 'Payment', page: 'Payment' }
      ]
    },
    phoneNumbers: [
      { name: 'Toll Free', number: '(888) 326-5866' },
      { name: 'Local', number: '(845) 278-5762' },
      { name: 'Fax', number: '(845) 278-5764' },
      { name: 'International', number: '+1 (845) 278-5762' }
    ],
    hours: [
      { day: 'Sunday', start: 'CLOSED', end: 'CLOSED' },
      { day: 'Monday', start: '9 AM', end: '6 PM' },
      { day: 'Tuesday', start: '9 AM', end: '6 PM' },
      { day: 'Wednesday', start: '9 AM', end: '6 PM' },
      { day: 'Thursday', start: '9 AM', end: '6 PM' },
      { day: 'Friday', start: '9 AM', end: '6 PM' },
      { day: 'Saturday', start: 'CLOSED', end: 'CLOSED' }
    ]
  }),
  methods: {
    toCallable (number) {
      return 'tel:' + number.match(/(\d|\+)+/g).join('-')
    }
  }
}
</script>

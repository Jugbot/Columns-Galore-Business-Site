<template>
  <v-container>
    <v-card>
      <v-card-actions color="primary">
        <v-breadcrumbs divider="/" :items={}>
          
        </v-breadcrumbs>
        <v-select
          v-for="name in search"
          :key='name'
          :items="questions[name].options"
          v-model='questions[name].selected'
          @change='setQuestion(name, $event)'
          :label="name">
        </v-select>
      </v-card-actions>
      <v-list two-line>
        <v-list-item v-for='product in searchResults' :key='product.CatalogId' avatar @click="toProductPage(product)">
          <v-list-item-content>
            <v-list-item-title>{{product.Manufacturer}} {{product.Model}}</v-list-item-title>
            <v-list-item-subtitle>{{product.Year}} {{product.Shift}} {{product.Transmission}} {{product.Tilt}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Catalog',
  data () {
    // manufacturer make model(year)
    return {
      questions: {
        'Manufacturer': {
          options: [
            'Jeep',
            'Ford',
            'Chevy & GMC',
            'American Motors'
          ],
          selected: null
        }
      },
      search: [
        //
      ],
      searchResults: [
        /* {
          CatalogId: 6,
          InventoryId: 'someID',
          Manufacturer: 'American Motors',
          Model: 'Ambassador',
          Year: '70',
          Shift: 'Floor',
          Transmission: 'Automatic',
          Tilt: 'Fixed',
          AdditionalOptions: null
        } */
      ]
    }
  },
  methods: {
    fetchList () {
      let values = {}
      for (const keyword in this.questions) {
        values[keyword] = this.questions[keyword].selected
      }
      fetch('http://localhost:3000/catalog', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        } }).then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            console.log(data)
            this.searchResults = data.result
            if (data.nextQuestion) {
              this.questions[data.nextQuestion] = { options: data.options }
              this.search.push(data.nextQuestion)
            }
          })
        }
      })
    },
    toProductPage (product) {

    },
    setQuestion (name, val) {
      this.$route.query[name] = val
      this.fetchList()
    }
  },
  created () {
    this.search.push('Manufacturer')
  }
}
</script>

<style>

</style>

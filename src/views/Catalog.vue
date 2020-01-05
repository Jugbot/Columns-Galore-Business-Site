<template>
  <v-container>
    <v-card>
      <v-card-actions>
        <v-breadcrumbs divider="/" :items="questions">
          <template #item="props">
            <v-breadcrumbs-item @click="goto(props.item.text)">
              {{props.item.text}}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-card-actions>
      <v-card-actions>
        <v-select
          :items="question.options"
          v-model='question.selected'
          @change='setQuestion()'
          :label="question.text">
        </v-select>
      </v-card-actions>
      <v-list two-line>
        <v-list-item v-for='product in searchResults' :key='product.CatalogId' @click="toProductPage(product)">
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
      questions: [
        {
          text: 'Manufacturer',
          options: [
            'Jeep',
            'Ford',
            'Chevy & GMC',
            'American Motors'
          ],
          selected: null
        }
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
  computed: {
    question () {
      return this.questions[this.questions.length - 1]
    }
  },
  methods: {
    goto (name) {
      this.questions = this.questions.slice(0,
        this.questions.findIndex(
          (o) => { o.text == name }
        ) - 1
      )
      this.fetchList()
    },
    fetchList () {
      let values = {}
      for (const obj of this.questions) {
        values[obj.text] = obj.selected
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
              this.questions.push({ text: data.nextQuestion, options: data.options })
            }
          })
        }
      })
    },
    toProductPage (product) {

    },
    setQuestion () {
      this.$route.query[this.question.text] = this.question.selected
      this.fetchList()
    }
  }
}
</script>

<style>

</style>

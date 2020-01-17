<template>
  <v-container>
    <v-card>
      <v-card-actions class="primary">
        <!-- <v-breadcrumbs divider="/" :items="questions" class='pa-0' dark>
          <template #item="props">
          </template>
        </v-breadcrumbs>-->
        <v-row align="baseline" no-gutters>
          <template v-for="(item, i) in questions">
            <v-btn :disabled="!item.selected" small text dark @click="goto(i)">{{item.text}}</v-btn>
            <div v-if="i != questions.length - 1" class="white--text mx-3">/</div>
          </template>
        </v-row>
      </v-card-actions>
      <v-card-actions>
        <v-select
          v-if="questions.length !== 0"
          :items="question.options"
          v-model="question.selected"
          @change="changeSelection()"
          :label="question.text"
        ></v-select>
      </v-card-actions>
      <v-list two-line>
        <v-list-item
          v-for="product in searchResults"
          :key="product.CatalogId"
          @click="toProductPage(product)"
        >
          <v-list-item-avatar>
            <v-img :src="product.Image || fallbackImage"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{product.Manufacturer}} {{product.Model}}</v-list-item-title>
            <v-list-item-subtitle>{{product.Year}} {{product.Shift}} {{product.Transmission}} {{product.Tilt}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <div class="text-center py-5">
      <v-pagination @input="fetchList()" total-visible v-model="page" :length="maxPage"></v-pagination>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'catalog',
  data () {
    // manufacturer make model(year)
    return {
      fallbackImage: require('../assets/steering_column.svg'),
      questions: [
        // {
        //   text: 'Manufacturer',
        //   options: [
        //     'Jeep',
        //     'Ford',
        //     'Chevy & GMC',
        //     'American Motors'
        //   ],
        //   selected: null
        // }
      ],
      searchResults: [
        // {
        //   CatalogId: 6,
        //   InventoryId: 'someID',
        //   Manufacturer: 'American Motors',
        //   Model: 'Ambassador',
        //   Year: '70',
        //   Shift: 'Floor',
        //   Transmission: 'Automatic',
        //   Tilt: 'Fixed',
        //   AdditionalOptions: null
        // }
      ],
      page: 1,
      maxPage: 1
    }
  },
  computed: {
    question () {
      return this.questions.length
        ? this.questions[this.questions.length - 1]
        : null
    }
  },
  methods: {
    goto (idx) {
      this.questions[idx].selected = null
      this.questions = this.questions.slice(0, idx + 1)
      this.fetchList()
    },
    fetchList () {
      let values = {}
      for (const obj of this.questions) {
        values[obj.text] = obj.selected || null
      }
      console.log(values)
      fetch('http://localhost:3000/catalog', {
        method: 'POST',
        body: JSON.stringify({ query: values, page: this.page }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        if (response.status === 200) {
          response.json().then(data => {
            console.log(data)
            this.searchResults = data.result
            this.maxPage = data.maxPage
            if (data.nextQuestion) {
              this.questions.push({
                text: data.nextQuestion,
                options: data.options
              })
            }
          })
        }
      })
    },
    toProductPage (product) {
      this.$router.push('/part/' + product.ProductInformationId)
    },
    changeSelection () {
      this.page = 1
      this.fetchList()
    }
  },
  mounted () {
    this.fetchList()
  }
}
</script>

<style>
</style>

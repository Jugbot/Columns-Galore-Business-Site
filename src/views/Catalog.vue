<template>
  <v-container>
    <v-card>
      <v-card-actions v-if="questions.length > 1" class="primary">
        <v-row align="baseline" no-gutters>
          <template v-for="(item, i) in questions">
            <v-btn :disabled="!item.selected" :key="item.text" small text dark @click="goto(i)">{{item.text}}</v-btn>
            <div v-if="i != questions.length - 1" :key="item.text+'-slash'" class="white--text mx-3">/</div>
          </template>
        </v-row>
      </v-card-actions>
      <v-card-actions v-if="!questionaireCompleted" class="primary">
        <v-icon dark class="px-3">mdi-home-search</v-icon>
        <v-select
          v-if="!fetching && question"
          :items="question.options"
          v-model="question.selected"
          @change="changeSelection()"
          :label="'Filter by Steering Column ' + question.text"
          class="white"
          filled
          light
          hide-details
          solo
        ></v-select>
        <v-select
          v-else
          class="white"
          loading
          label="Loading..."
          disabled
          filled
          light
          hide-details
          solo
          />
      </v-card-actions>
      <v-card-actions v-if="questionaireCompleted" class="primary text-center justify-center white--text ">
        <h2 class="py-3">Select your steering column below!</h2>
      </v-card-actions>
      <v-card-text v-if="!questionaireCompleted" class="text-center">
        <h3>Search for the steering column you need! Use the prompt above to narrow down your search.</h3> <br>
        Alternatively, <router-link to='/quote'>request a quote</router-link>.
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-list v-if="fetching" two-line>
        <v-skeleton-loader
          v-for="key in [1,2,3,4,5]"
          :key="key"
          type="list-item-avatar-two-line"
        ></v-skeleton-loader>
      </v-list>
      <v-list v-else two-line>
        <v-list-item
          v-for="product in searchResults"
          :key="product.CatalogId"
          :to="'/part/' + product.CatalogId"
        >
          <v-list-item-avatar>
            <v-img :src="product.ImagePath" :lazy-src="fallbackImage"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{product.Manufacturer}} {{product.Model}}</v-list-item-title>
            <v-list-item-subtitle>{{product.Year}} {{product.Shift}} {{product.Transmission}} {{product.Tilt}} {{product.AdditionalOptions}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-row class="text-center py-5" no-gutters>
      <v-btn :to="{query:{...$route.query, page:(page-1)}}" :disabled="page===1" color="primary"><v-icon>mdi-arrow-left</v-icon></v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{query:{...$route.query, page:(page+1)}}" :disabled="page===maxPage" color="primary"><v-icon>mdi-arrow-right</v-icon></v-btn>
    </v-row>
  </v-container>
</template>

<style>

</style>

<script>
import api from '@/api'

export default {
  name: 'catalog',
  metaInfo: {
    title: 'Catalog'
  },
  data () {
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
        //   selected: 'Jeep'
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
      maxPage: 1,
      fetching: true
    }
  },
  computed: {
    question () {
      return this.questions.length
        ? this.questions[this.questions.length - 1]
        : null
    },
    questionaireCompleted () {
      return !!this.question?.selected && !this.fetching
    },
    columnQuery () {
      let values = {}
      for (const obj of this.questions) {
        values[obj.text] = obj.selected || null
      }
      return values
    }
  },
  methods: {
    setPage (page) {
      this.page = page
      this.setSearchParams({ page: page, ...this.columnQuery })
    },
    setQuestions (questions) {
      this.questions = questions
      this.setSearchParams({ page: this.page, ...this.columnQuery })
    },
    goto (idx) {
      this.setQuestions(this.questions.slice(0, idx))
      this.setPage(1)
      this.fetchList()
    },
    setSearchParams (keyValue) {
      for (const [key, val] of Object.entries(keyValue)) {
        if (val === null) {
          delete keyValue[key]
        }
      }
      this.$router.push({ query: keyValue }).catch(() => {})
    },
    fetchList () {
      this.fetching = true
      api.postCatalog({ query: this.columnQuery, page: this.page })
        .then(response => {
          this.fetching = false
          if (response.status === 200) {
            response.json().then(data => {
              this.searchResults = data.result
              this.maxPage = data.maxPage
              if (data.nextQuestion) {
                this.setQuestions([...this.questions, {
                  text: data.nextQuestion,
                  options: data.options
                }])
              }
            })
          }
        })
    },
    changeSelection () {
      this.setPage(1)
      this.fetchList()
    }
  },
  created () {
    const query = { ...this.$route.query }
    for (const name in query) {
      if (name === 'page') {
        this.setPage(parseInt(query[name]))
      } else {
        this.setQuestions([...this.questions, {
          text: name,
          options: [],
          selected: query[name]
        }])
      }
    }
    this.fetchList()
  }
}
</script>

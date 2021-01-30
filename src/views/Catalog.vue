<template>
  <v-container>
    <v-card>
      <v-card-actions v-if="questions.length > 1" class="primary">
        <!-- <v-breadcrumbs divider="/" :items="questions" class='pa-0' dark>
          <template #item="props">
          </template>
        </v-breadcrumbs>-->
        <v-row align="baseline" no-gutters>
          <template v-for="(item, i) in questions">
            <v-btn :disabled="!item.selected" :key="item.text" small text dark @click="goto(i)">{{item.text}}</v-btn>
            <div v-if="i != questions.length - 1" :key="item.text+'-slash'" class="white--text mx-3">/</div>
          </template>
        </v-row>
      </v-card-actions>
      <v-card-actions v-if="questions.length !== 0 && !questionaireCompleted" class="primary">
        <v-select
          :items="question.options"
          v-model="question.selected"
          @change="changeSelection()"
          :label="'Steering Column ' + question.text"
          prepend-icon="mdi-home-search"
          filled
          dark
          hide-details
          outlined
        ></v-select>
      </v-card-actions>
      <v-card-text class="text-center">
        Search for the steering column you need! Use the prompt above to narrow down your search. <br>
        Alternatively, <router-link to='/quote'>request a quote</router-link>.
      </v-card-text>
    </v-card>
    <v-card class="mt-5">
      <v-list two-line>
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
            <v-list-item-subtitle>{{product.Year}} {{product.Shift}} {{product.Transmission}} {{product.Tilt}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-row class="text-center py-5" no-gutters>
      <!-- <v-btn :to="'?page=' + (page - 1)" @click="page--;fetchList()" :disabled="page<=1" color="white">prev</v-btn> -->
      <v-flex>
        <v-pagination @input="fetchList()" total-visible v-model="page" :length="maxPage"></v-pagination>
      </v-flex>
      <!-- <v-btn :to="'?page=' + (page + 1)" @click="page++;fetchList()" :disabled="page>=maxPage" color="white">next</v-btn> -->
    </v-row>
  </v-container>
</template>

<style>
/* hide native paginator buttons */
/* .v-paginator li:last-of-type {
  display: hidden;
}
.v-paginator li:first-of-type {
  display: hidden;
} */
</style>

<script>
import api from '@/api'

export default {
  name: 'catalog',
  metaInfo: {
    title: 'Catalog'
  },
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
      maxPage: 1
    }
  },
  watch: {
    questions (val) {
      this.setSearchParams(this.columnQuery)
    },
    page (val) {
      this.setSearchParams({ page: this.page })
    }
  },
  computed: {
    question () {
      return this.questions.length
        ? this.questions[this.questions.length - 1]
        : null
    },
    questionaireCompleted () {
      return !!this.question.selected
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
    goto (idx) {
      this.questions = this.questions.slice(0, idx)
      this.fetchList()
    },
    setSearchParams (keyValue) {
      if ('URLSearchParams' in window) {
        var searchParams = new URLSearchParams(window.location.search)
        for (const [key, val] of Object.entries(keyValue)) {
          if (val === null) {
            continue
          }
          searchParams.set(key, val)
        }
        var newRelativePathQuery = window.location.pathname + '?' + searchParams.toString()
        history.pushState(null, '', newRelativePathQuery)
      }
    },
    fetchList () {
      api.postCatalog(JSON.stringify({ query: this.columnQuery, page: this.page }))
        .then(response => {
          if (response.status === 200) {
            response.json().then(data => {
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
    changeSelection () {
      this.page = 1
      this.fetchList()
    }
  },
  created () {
    // digest url query
    const query = { ...this.$route.query }
    for (const name in query) {
      if (name === 'page') {
        this.page = parseInt(query[name])
      } else {
        this.questions.push({
          text: name,
          options: [],
          selected: query[name]
        })
      }
    }
    this.fetchList()
  }
}
</script>

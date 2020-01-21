<template>
  <v-container>
    <v-card>
      <v-img :src='part.Image || fallbackImage' 
      class="img-expand hidden-md-and-up"
      @click='imageClicked=!imageClicked'
      :style="{'max-height':imageClicked?'500px':null}"></v-img>
      <v-card-title>{{this.title}}</v-card-title>
      <v-card-subtitle>
        Price: ${{this.part.Price}}, Core Charge: ${{this.part.CoreCharge}}
      </v-card-subtitle>
      <v-card-text>
        <!-- generated content -->
        <v-img :src='part.Image || fallbackImage' class="float-right hidden-sm-and-down" 
        style="" width='200'></v-img>
        <span v-html="part.DescriptionHTML"></span>
      </v-card-text>
      <v-card-actions>
        <v-btn :to="{path: '/quote', query:{ id: part.CatalogId}}" block large color="primary"><b>Get A Quote</b></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'InventoryId',
  data () {
    return {
      imageClicked: false,
      fallbackImage: require('../assets/steering_column.svg'),
      part: {}
    }
  },
  computed: {
    title () {
      return [this.part.Year, this.part.Manufacturer, this.part.Model, this.part.Tilt].join(' ')
      // "Column type:\t1980 - 1991 Ford Trucks (F series) and Vans (E Series) with non tilt.
    }
  },
  created () {
    fetch('http://localhost:3000/part?id=' + this.$route.params.id).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          console.log(data)
          this.part = data
        })
      }
    })
  }
}
</script>

<style>
.img-expand {
  max-height: 200px;
  transition: max-height 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
}
</style>

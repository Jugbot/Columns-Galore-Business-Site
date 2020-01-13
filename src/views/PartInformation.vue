<template>
  <v-container>
    <v-card>
      <v-img :src='part.Image || fallbackImage' 
      class="img-expand"
      @click='imageClicked=!imageClicked'
      :style="{'max-height':imageClicked?null:'500px'}"></v-img>
      <v-card-title primary-title>
        {{this.part.Title}}
        <div class="subtitle-1">Price: ${{this.part.Price}}, Core Charge: ${{this.part.CoreCharge}}</div>
      </v-card-title>
      <v-card-text v-html="part.DescriptionHTML">

      </v-card-text>
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
  mounted () {
    console.log(this.$route.params.id)
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

<template>
  <v-container>
    <v-card>
      <v-card-title primary-title>
        {{this.title}}
      </v-card-title>
      <v-card-text v-html="description">
        
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'InventoryId',
  data () {
    return {
      description: '',
      title: ''
    }
  },
  created () {
    console.log(this.$route.params.id)
    fetch('http://localhost:3000/part?id=' + this.$route.params.id).then(response => {
      if (response.status === 200) {
        response.json().then(data => {
          console.log(data)
          this.description = data.DescriptionHTML
          this.title = data.Title
        })
      }
    })
  }
}
</script>

<style>

</style>

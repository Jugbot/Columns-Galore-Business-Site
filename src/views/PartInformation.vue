<template>
  <v-container>
    <v-card>
      <v-img :src='part.ImagePath'
      :lazy-src='fallbackImage'
      class="img-expand"
      @click='imageClicked=!imageClicked'
      :style="{'max-height':imageClicked?'none':null}"></v-img>
      <v-card-title>
        {{this.title}}
      </v-card-title>
      <v-card-subtitle>
        Price: ${{this.part.Price}}, Core Charge: ${{this.part.CoreCharge}}
      </v-card-subtitle>
      <v-card-text>
        <!-- generated content -->
        <span v-show="part.ProcessHTML">
          <h3>What gets done when we rebuild.</h3>
          <span v-html="part.ProcessHTML"></span>
        </span>
        <span v-show="part.IncludesHTML">
          <h3>Comes complete with:</h3>
          <span v-html="part.IncludesHTML"></span>
        </span>
        <span v-show="part.ExcludesHTML">
          <h3>This column does not come with:</h3>
          <span v-html="part.ExcludesHTML"></span>
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn :to="{path: '/quote', query:{ id: part.CatalogId}}" block large color="primary"><b>Get A Quote</b></v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/api'

export default {
  name: 'InventoryId',
  metaInfo: {
    title: 'Part Information'
  },
  data () {
    return {
      imageClicked: false,
      fallbackImage: require('../assets/steering_column.svg'),
      part: {
        // AdditionalOptions: ""
        // CatalogId: "SCG1138A"
        // CoreCharge: 250
        // ExcludesHTML: "<p>Steering wheel, tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>"
        // ExcludesInfoId: 5
        // ImagePath: "https://columnsgalore.com/images/SCG1138A.jpg"
        // IncludesHTML: "<p>New signal switch, new ignition switch and a new lock with 2 keys, new cruise control lever if equiped with cruise control.</p>"
        // IncludesInfoId: 2
        // Manufacturer: "Chevy & GMC Trucks"
        // Model: "Pick Up Truck"
        // Price: 425
        // ProcessHTML: "<p>Complete disassembly, sand blast to remove rust & paint, clean and degrease, inspect components, repack or replace bearings, grease moving parts, replace broken & worn parts, twelve point test, paint to match interior.<p>"
        // ProcessInfoId: 1
        // ProductInformationId: 4
        // Shift: "Column"
        // Tilt: "Tilt"
        // Transmission: "Automatic"
        // Year: "84-87"
      }
    }
  },
  computed: {
    title () {
      return ['Part #' + this.part.CatalogId, this.part.Year, this.part.Manufacturer, this.part.Model, this.part.Tilt, this.part.AdditionalOptions].join(' ')
      // "Column type:\t1980 - 1991 Ford Trucks (F series) and Vans (E Series) with non tilt.
    }
  },
  created () {
    api.getPart(this.$route.params.id).then(response => {
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
  max-width: 100%;
  transition: max-height 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
}
</style>

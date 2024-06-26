<template>
  <v-container>
    <v-card>
      <v-img
        :src="part.ImagePath"
        :lazy-src="fallbackImage"
        class="img-expand"
        :style="{ 'max-height': imageClicked ? 'none' : null }"
        :alt="title"
        @click="imageClicked = !imageClicked"
      />
      <v-card-title>
        {{ title }}
      </v-card-title>
      <v-card-subtitle>
        Price: ${{ part.Price }}, Core Charge: ${{ part.CoreCharge }}, Part #{{
          part.CatalogId
        }}
      </v-card-subtitle>
      <v-card-text>
        <!-- generated content -->
        <span v-show="part.ProcessHTML">
          <h3>What gets done when we rebuild.</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="part.ProcessHTML" />
        </span>
        <span v-show="part.IncludesHTML">
          <h3>Comes complete with:</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="part.IncludesHTML" />
        </span>
        <span v-show="part.ExcludesHTML">
          <h3>This column does not come with:</h3>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <span v-html="part.ExcludesHTML" />
        </span>
      </v-card-text>
      <v-card-actions>
        <v-btn
          :to="{ path: '/quote', query: { id: part.CatalogId } }"
          rel="nofollow"
          block
          large
          color="primary"
        >
          <b>Submit an Order</b>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import api from '@/api'

export default {
  name: 'PartInformation',
  metaInfo: {
    title: 'Part Information',
  },
  data() {
    return {
      imageClicked: true, // Start with large image to avoid confusion
      fallbackImage: require('../assets/steering_column.svg'),
      part: {
        // ExcludesInfoId: 8,
        // IncludesInfoId: 2,
        // ProcessInfoId: 1,
        // CatalogId: 'SCG1138A',
        // Manufacturer: 'Chevy & GMC Trucks',
        // Model: 'Pick Up Truck',
        // Year: '84-87',
        // Shift: 'Column',
        // Transmission: 'Automatic',
        // Tilt: 'Tilt',
        // AdditionalOptions: 'Delay Wipers',
        // ImagePath: '/images/SCG1138A.jpg',
        // Price: 475,
        // CoreCharge: 250,
        // ProcessHTML:
        //   '<p>Complete disassembly, sand blast to remove rust & paint, clean and degrease, inspect components, repack or replace bearings, grease moving parts, replace broken & worn parts, twelve point test, paint to match interior.</p>',
        // IncludesHTML:
        //   '<p>New signal switch, new ignition switch and a new lock with 2 keys, new cruise control lever if equiped with cruise control.</p>',
        // ExcludesHTML:
        //   '<p>Steering wheel, tilt lever, shift lever, hazard button, reverse light switch, these parts may be available if needed. The Customer can remove these items from their broken column and install them on our rebuilt column.</p>',
      },
    }
  },
  computed: {
    title() {
      return [
        this.part.Year,
        this.part.Manufacturer,
        this.part.Model,
        'Steering Column with',
        this.part.Tilt,
        this.part.AdditionalOptions,
      ].join(' ')
      // "Column type:\t1980 - 1991 Ford Trucks (F series) and Vans (E Series) with non tilt.
    },
  },
  created() {
    api.getPart(this.$route.params.id).then((response) => {
      if (response.status === 200) {
        response.json().then((data) => {
          this.part = data
        })
      }
    })
  },
}
</script>

<style>
.img-expand {
  max-height: 200px;
  max-width: 100%;
  transition: max-height 0.4s cubic-bezier(0.39, 0.58, 0.57, 1);
}
</style>

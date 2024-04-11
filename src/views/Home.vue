<template>
  <v-container>
    <v-card class="mb-5">
      <v-card-title>
        Supplying Professionally Rebuilt Automotive Steering Columns Since 1990
      </v-card-title>
      <v-card-text>
        <h2>Quality:</h2>
        <ul>
          <li>Original Equipment, OEM Not Aftermarket</li>
          <li>Fully Guaranteed</li>
          <li>Thoroughly Tested</li>
        </ul>

        <h2>Service:</h2>
        <ul>
          <li>Over {{ $yearsSinceFounding }} Years Experience</li>
          <li>Reliable</li>
          <li>100% Satisfaction Guaranteed</li>
        </ul>
      </v-card-text>
    </v-card>
    <v-card>
      <v-card-title>
        Huge Inventory, Over 3000 Steering Columns In Stock From 1969 & Up
      </v-card-title>
      <v-card-text>
        <v-row no-gutters>
          <span>
            <h2>GM Cars & Trucks</h2>
            <ul>
              <li>Chevy & GMC Pick Up Trucks & SUV's</li>
              <li>Chevrolet Cars</li>
              <li>Buick</li>
              <li>Oldsmobile</li>
              <li>Pontiac</li>
              <li>GM P30, Step Van, Workhorse Chassis, Walk In Van</li>
              <li>Kodiak, Top Kick</li>
              <li>G Series Vans</li>
            </ul>
            <h2>Ford Cars & Trucks:</h2>
            <ul>
              <li>Ford Pick Up Trucks & SUV's</li>
              <li>Ford Cars</li>
              <li>Mercury</li>
              <li>Lincoln</li>
              <li>Ford Strip Chassis, Aluminum Body, Walk In Van</li>
              <li>E Series Vans</li>
            </ul>

            <h2>Chrysler, Dodge & Jeep Cars & Trucks:</h2>
            <ul>
              <li>Dodge Ram Pick Up Trucks & SUV's</li>
              <li>Dodge Vans</li>
              <li>Dodge Cars</li>
              <li>Chrysler</li>
              <li>Jeep Wrangler, CJ Series</li>
            </ul>
          </span>
          <v-col>
            <v-img
              class="mx-4"
              alt="This picture represents, SCG1754A, SCG1754B, SCG1941A, SCG1941B"
              :src="require('../assets/SCG1754b.jpg')"
              max-height="250"
              contain
            />
            <v-img
              class="mx-4"
              alt="This picture represents SCGP3091 and SCGP3094"
              :src="require('../assets/SCGP3091.jpg')"
              max-height="250"
              contain
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style>
.v-card__title {
  word-break: initial;
}
</style>

<script>
export default {
  name: 'home',
  components: {},
  metaInfo: {
    title: 'Steering Columns Galore',
    titleTemplate: '%s',
  },
}
</script>

<template>
  <v-container>
    <v-form ref="form" method="POST" action="http://columnsgalore.com/cgi-bin/formmail.cgi">
      <v-card>
        <v-card-title>Your Vehicle Information</v-card-title>
        <v-card-subtitle>
          Use the
          <router-link to="catalog">Catalog</router-link>
          to automatically fill this information!
        </v-card-subtitle>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field v-model="part.Year" required name="year" label="Year"></v-text-field>
              <v-text-field v-model="part.Manufacturer" required name="make" label="Make"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field v-model="part.Model" required name="model" label="Model"></v-text-field>
              <v-select
                :items="colors"
                name='color'
                label="Paint Color"
                :item-disabled="(o) => !o.available"
                :item-text="(o) => o.name"
                :item-value="(o) => o.id">
                <template #selection="{item}">
                  {{item.name}}
                </template>
                <template #item='{item}'>
                  <v-chip :color="item.color" style="width:100%">
                    <v-chip disabled v-if='item.available' small color="white">{{item.name}}</v-chip>
                    <v-chip disabled v-else small color="grey" text-color="white">unavailable</v-chip>
                  </v-chip>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field v-if='part.Price' v-model="part.Price" outlined name="price" label="Price" readonly></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-row no-gutters wrap>
                <v-col>
                  <v-radio-group v-model="part.Tilt">
                    <v-radio name="tilt" label="Tilt Wheel" value="tilt"></v-radio>
                    <v-radio name="fixed" label="Fixed Wheel" value="fixed"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Shift">
                    <v-radio name="column" label="Column Shift" value="column"></v-radio>
                    <v-radio name="floor" label="Floor Shift" value="floor"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Transmission">
                    <v-radio name="automatic" label="Automatic" value="automatic"></v-radio>
                    <v-radio name="manual" label="Manual" value="manual"></v-radio>
                  </v-radio-group>
                </v-col>
                <!-- <v-col>
                  <v-radio-group v-model="part.Tilt">
                    <v-radio name="delay" label="Delay" value="delay"></v-radio>
                    <v-radio name="2speed" label="2 Speed" value="2speed"></v-radio>
                  </v-radio-group>
                </v-col> -->
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-textarea
              auto-grow
              rows="1"
              v-model="part.AdditionalInformation"
              name="aditionalinfo"
              label="Additional Information">
              </v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>Personal Information</v-card-title>
        <v-card-text>
          <v-row wrap no-gutters>
            <v-text-field required name="company" label="Company"></v-text-field>
            <v-text-field required name="contact" label="Contact"></v-text-field>
            <v-text-field required name="street" label="Street"></v-text-field>
            <v-text-field required name="city" label="City"></v-text-field>
            <v-text-field required name="state" label="State"></v-text-field>
            <v-text-field required name="zip" label="Zip"></v-text-field>
            <v-text-field required name="country" label="Country"></v-text-field>
            <v-select required
              :items='[{text:"Email", value:"email"}, {text:"Phone", value:"phone"}]'
              name="contactby"
              label="Contact Preference"
            ></v-select>
            <v-text-field required name="phone" label="Phone"></v-text-field>
            <v-text-field required name="email" label="Email"></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$refs.form.reset()" text color="error">Reset</v-btn>
          <v-btn type="submit" color="success">Submit</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import colors from '@/colors'

export default {
  name: 'quote',
  data () {
    return {
      colors: colors,
      part: {
        CatalogId: null,
        InventoryId: null,
        ProductInformationId: null,
        Manufacturer: '',
        Model: '',
        Year: '',
        Shift: '',
        Transmission: '',
        Tilt: '',
        AdditionalOptions: null,
        Image: null,
        Price: '',
        CoreCharge: ''
      }
    }
  },
  created () {
    if ('id' in this.$route.query) {
      fetch('http://localhost:3000/catalog?id=' + this.$route.query.id).then(
        response => {
          if (response.status === 200) {
            response.json().then(data => {
              data.Tilt = data.Tilt.toLowerCase()
              data.Shift = data.Shift.toLowerCase()
              data.Transmission = data.Transmission.toLowerCase()
              this.part = data
            })
          }
        }
      )
    }
  }
}
</script>

<style>
/* .v-application .v-card__text .v-divider {
  position: absolute;
  margin-left: -16px !important;
  margin-right: -16px !important;
  width: calc(100% + 32px);
} */
</style>

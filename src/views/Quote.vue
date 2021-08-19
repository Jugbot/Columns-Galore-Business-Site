<template>
  <v-container>
    <v-card v-if="submitStep" key="submit step">
      <v-card-title>Your Vehicle Information</v-card-title>
      <v-card-text>
        Send to: <a :href="`mailto:quoteform@columnsgalore.com`">quoteform@columnsgalore.com</a>
      </v-card-text>
      <v-card-text>
        <v-textarea v-model="emailContent" auto-grow filled></v-textarea>
      </v-card-text>
    </v-card>
    <v-form v-else ref="form" key="form step">
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
              <v-text-field
                v-model="part.Year"
                :rules="[rules.required]"
                name="year"
                label="Year"
              ></v-text-field>
              <v-text-field
                v-model="part.Manufacturer"
                :rules="[rules.required]"
                name="make"
                label="Make"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="part.Model"
                :rules="[rules.required]"
                name="model"
                label="Model"
              ></v-text-field>
              <v-select
                :items="colors"
                name="color"
                label="Paint Color"
                :item-disabled="(o) => !o.available"
                :item-text="(o) => o.name"
                :item-value="(o) => o.id"
              >
                <template #selection="{ item }">
                  {{ item.name }}
                </template>
                <template #item="{ item }">
                  <v-chip :color="item.color" style="width: 100%">
                    <v-chip
                      disabled
                      v-if="item.available"
                      small
                      color="white"
                      >{{ item.name }}</v-chip
                    >
                    <v-chip
                      disabled
                      v-else
                      small
                      color="grey"
                      text-color="white"
                      >unavailable</v-chip
                    >
                  </v-chip>
                </template>
              </v-select>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field
                v-if="part.Price"
                v-model="part.Price"
                outlined
                name="price"
                label="Price"
                readonly
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-row no-gutters wrap>
                <v-col>
                  <v-radio-group v-model="part.Tilt">
                    <v-radio
                      name="wheel"
                      label="Tilt Wheel"
                      value="tilt"
                    ></v-radio>
                    <v-radio
                      name="wheel"
                      label="Fixed Wheel"
                      value="fixed"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Shift">
                    <v-radio
                      name="shift"
                      label="Column Shift"
                      value="column"
                    ></v-radio>
                    <v-radio
                      name="shift"
                      label="Floor Shift"
                      value="floor"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Transmission">
                    <v-radio
                      name="transmission"
                      label="Automatic"
                      value="automatic"
                    ></v-radio>
                    <v-radio
                      name="transmission"
                      label="Manual"
                      value="manual"
                    ></v-radio>
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
                label="Additional Information"
              >
              </v-textarea>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>Personal Information</v-card-title>
        <v-card-text>
          <v-row wrap no-gutters>
            <v-text-field
              v-model="contact.Company"
              :rules="[rules.required]"
              name="company"
              label="Company"
            ></v-text-field>
            <v-text-field
              v-model="contact.Name"
              :rules="[rules.required]"
              name="name"
              label="Name"
            ></v-text-field>
            <v-text-field
              v-model="contact.Address"
              :rules="[rules.required]"
              name="address"
              label="Address"
            ></v-text-field>
            <v-text-field
              v-model="contact.Phone"
              :rules="[rules.required]"
              name="phone"
              label="Phone"
              hint="Optional."
            ></v-text-field>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="$refs.form.reset()" text color="error">Reset</v-btn>
          <v-btn @click="toSubmitStep()" color="success">Next</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import colors from '@/colors'
import api from '@/api'

export default {
  name: 'quote',
  metaInfo: {
    title: 'Get A Quote'
  },
  data () {
    return {
      colors: colors,
      submitStep: false,
      emailContent: '',
      part: {
        CatalogId: null,
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
      },
      contact: {
        Company: '',
        Name: '',
        Address: '',
        Phone: ''
      },
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  methods: {
    toSubmitStep () {
      const capitalize = ([firstLetter, ...restOfWord]) => firstLetter.toUpperCase() + restOfWord.join('')
      this.emailContent =
        'I am looking for a ' +
        (this.part.Year ? this.part.Year + ' ' : '(unknown year) ') +
        (this.part.Manufacturer ? this.part.Manufacturer + ' ' : '(unknown manufacturer) ') +
        (this.part.Model ? this.part.Model + ' ' : '(unknown model) ') +
        (this.part.Transmission ? capitalize(this.part.Transmission) + ' ' : '(unknown transmission) ') +
        (this.part.Tilt ? capitalize(this.part.Tilt) + ' Wheel ' : '(unknown wheel tilt) ') +
        (this.part.Shift ? capitalize(this.part.Shift) + ' Shift ' : '(unknown shift) ') +
        (this.part.AdditionalOptions ? 'with ' + capitalize(this.part.AdditionalOptions) : '') +
        '\n\n' +
        'My contact information is as follows:\n' +
        Object.entries(this.contact).map(([k, v]) => k + ': ' + v).join('\n')
      console.log(this.$refs.form)
      this.submitStep = true
    }
  },
  created () {
    if ('id' in this.$route.query) {
      api.getCatalog(this.$route.query.id).then((response) => {
        if (response.status === 200) {
          response.json().then((data) => {
            data.Tilt = data.Tilt.toLowerCase()
            data.Shift = data.Shift.toLowerCase()
            data.Transmission = data.Transmission.toLowerCase()
            this.part = data
          })
        }
      })
    }
  }
}
</script>

<template>
  <v-container>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>We Recieved Your Request</v-card-title>
        <v-card-text>
          You should be contacted by a member of our sales team soon. In the
          meantime if you have any questions please email us at
          <a href="mailto:salesteam@columnsgalore.com"
            >salesteam@columnsgalore.com</a
          >
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-form ref="form">
      <v-card>
        <v-card-title>Your Vehicle Information</v-card-title>
        <v-card-subtitle>
          Use the
          <router-link to="catalog"> Catalog </router-link>
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
              />
              <v-text-field
                v-model="part.Manufacturer"
                :rules="[rules.required]"
                name="make"
                label="Make"
              />
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <v-text-field
                v-model="part.Model"
                :rules="[rules.required]"
                name="model"
                label="Model"
              />
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
                    <v-chip v-if="item.available" disabled small color="white">
                      {{ item.name }}
                    </v-chip>
                    <v-chip
                      v-else
                      disabled
                      small
                      color="grey"
                      text-color="white"
                    >
                      unavailable
                    </v-chip>
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
              />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-row no-gutters wrap>
                <v-col>
                  <v-radio-group v-model="part.Tilt">
                    <v-radio name="wheel" label="Tilt Wheel" value="tilt" />
                    <v-radio name="wheel" label="Fixed Wheel" value="fixed" />
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Shift">
                    <v-radio name="shift" label="Column Shift" value="column" />
                    <v-radio name="shift" label="Floor Shift" value="floor" />
                  </v-radio-group>
                </v-col>
                <v-col>
                  <v-radio-group v-model="part.Transmission">
                    <v-radio
                      name="transmission"
                      label="Automatic"
                      value="automatic"
                    />
                    <v-radio
                      name="transmission"
                      label="Manual"
                      value="manual"
                    />
                  </v-radio-group>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="part.AdditionalInformation"
                auto-grow
                rows="1"
                name="aditionalinfo"
                label="Additional Information"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card class="mt-3">
        <v-card-title>Personal Information</v-card-title>
        <v-card-subtitle>
          We will contact you for payment information.
        </v-card-subtitle>
        <v-card-text>
          <v-row wrap no-gutters style="gap: 0 1em">
            <v-text-field v-model="contact.Name" name="name" label="Name" />
            <v-text-field
              v-model="contact.Address"
              :rules="[rules.required]"
              name="address"
              label="Address"
            />
            <v-select
              v-model="contact.ContactBy"
              :rules="[rules.required]"
              :items="[
                { text: 'Email', value: 'email' },
                { text: 'Phone', value: 'phone' },
              ]"
              name="contactby"
              label="Contact Preference"
            />
            <v-text-field
              v-if="contact.ContactBy === 'phone'"
              v-model="contact.Phone"
              :rules="[rules.required]"
              name="phone"
              label="Phone"
            />
            <v-text-field
              v-if="contact.ContactBy === 'email'"
              v-model="contact.Email"
              :rules="[rules.required]"
              name="email"
              label="Email"
            />
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="error" text @click="$refs.form.reset()"> Reset </v-btn>
          <v-btn color="success" @click="onSubmit()"> Submit </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
import colors from '@/colors'
import api from '@/api'

export default {
  name: 'Quote',
  metaInfo: {
    title: 'Get A Quote',
  },
  data() {
    return {
      colors: colors,
      dialog: false,
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
        CoreCharge: '',
      },
      contact: {
        Name: '',
        Address: '',
        ContactBy: 'email',
        Phone: '',
        Email: '',
      },
      rules: {
        required: (value) => !!value || 'Required.',
      },
    }
  },
  created() {
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
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        window.gtag('event', 'conversion', {
          product: this.part.CatalogId,
          price: this.part.Price,
        })
        api.postQuote({ part: this.part, contact: this.contact }).then(() => {
          this.dialog = true
        })
      }
    },
  },
}
</script>

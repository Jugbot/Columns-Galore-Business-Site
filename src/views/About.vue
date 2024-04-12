<template>
  <v-container>
    <v-card>
      <v-card-title class="justify-center headline">
        Company Profile
      </v-card-title>
      <v-card-text>
        <p>
          Family owned and operated business, Bill and Rick Lanza - father and
          son.
        </p>
        <p>
          Over {{ $yearsSinceFounding }} years experience in the steering column
          business.
        </p>
        <p>
          Started as a mobile steering column rebuilding service in the New York
          City / Tri State Area and has grown to include rebuilt steering
          columns and steering column parts shipped world-wide.
        </p>
        <p>
          We provide part testing and market insight for the largest after
          market manufacturers in the United States.
        </p>
        <h3>Our Goals:</h3>
        <ol>
          <li>Provide Quality Customer Service.</li>
          <li>
            Provide High Quality Rebuilt Steering Columns and Parts at
            Reasonable Prices.
          </li>
          <li>
            Continually Increase Stock In Both Late Model and Early Model
            Applications.
          </li>
        </ol>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About Us',
  },
}
</script>

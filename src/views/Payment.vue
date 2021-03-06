<template>
  <v-container>
    <p>
      <span align="center">
        <h1>Payment</h1>
      </span>
    </p>
    <p>If you use a credit card we do not charge the core charge up front.</p>
    <p>We hold onto your credit card number and if you do not return the core within 30 days we will automatically charge your account.</p>
    <h3>In addition to credit cards we accept:</h3>
    <ul>
      <li>Postal money orders (Prepay including the core charge)</li>
      <li>Company Checks (Prepay including the core charge, from auto related businesses with resale number)</li>
      <li>Net 30 accounts (For large volume customers and municipalities, credit application available upon request)</li>
    </ul>
  </v-container>
</template>

<script>
export default {
  name: 'payment',
  metaInfo: {
    title: 'Payment Information'
  }
}
</script>

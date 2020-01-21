<template>
  <v-container>
    <p>
      <span align="center">
        <h1>SEM Brand Vinyl &amp; Plastic Steering Column Paint</h1>
      </span>
    </p>
    <p>
      All Rebuilt Steering Columns come painted one of the following colors.
    </p>
    <p>
      This paint is designed for plastic which most steering column parts are but can be used to paint the metal parts also. They have been matched to most of the popular colors that the manufactures have been using on the interiors of their cars.The paint samples below may appear differently on different monitors please use color guide to get a general idea only.
    </p>
    <p>
      You may prefer to visit your local auto body supply store to see the exact colors.
    </p>
    <v-simple-table>
      <table>
        <tbody>
          <tr>
            <th>Color Paint</th>
            <th>Part #</th>
            <th>Approximate Color</th>
          </tr>
          <tr v-for="({id, available, name, color}, i) in colors" :key='i'>
            <td>{{name}}&nbsp;{{available ? '' : '(unavailable)'}}</td>
            <td>{{id}}</td>
            <td>
              <v-chip :color="color" style="width:100%"></v-chip>
            </td>
          </tr>
        </tbody>
      </table>
    </v-simple-table>
  </v-container>
</template>

<script>
import colors from '@/colors'

export default {
  name: 'coloroptions',
  data () {
    return {
      colors: colors
    }
  }
}
</script>

<template>
  <div>
    <h1>Hallo on Home</h1>
    <h2 v-if="this.bitdata!==null">BitCoin Preis: {{ this.bitData.data.bpi.EUR.rate }} {{ this.bitData.data.bpi.EUR.code }}</h2>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'

  export default Vue.extend({ 
    name: 'Home',
    data: () => ({
      bitData: null
    }),

    async mounted() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          this.bitData = response
        })
    }
  })
</script>

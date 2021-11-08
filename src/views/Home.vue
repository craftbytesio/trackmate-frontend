<template>
  <div>
    <h1>Hallo on Home</h1>
    <h2 v-if="this.bitdata!==null">BitCoin Preis: {{ this.bitData.data.bpi.EUR.rate }} {{ this.bitData.data.bpi.EUR.code }}</h2>
    <button v-if="this.$store.getters['auth/loggedIn']" @click="logout">Logout</button>
    <button v-if="!this.$store.getters['auth/loggedIn']" @click="loginView">Login</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import axios from 'axios'
  import AuthService from '@/service/AuthService';

  export default Vue.extend({ 
    name: 'Home',
    data: () => ({
      bitData: null
    }),
    methods: {
      loginView(){
        this.$router.push('login');
      },
      async logout(){
        await AuthService.logout();
        this.$router.push('/login');
      }
    },

    async mounted() {
        axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
          this.bitData = response
        })
    }
  })
</script>

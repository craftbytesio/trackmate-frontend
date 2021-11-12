<template>
    <v-bottom-navigation 
      grow
      fixed
      bottom
      color="teal"
      >
      <v-btn to="/home">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
          v-if="!isLoggedIn"
          to="/login"
      >
        <span>Login</span>
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
          v-if="isLoggedIn"
          @click="logout"
      >
        <span>Logout</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>


<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'NavBar',
    methods: {
      logout: function() {
        this.$store.dispatch('logout')
        .then(() => this.$router.push({name: 'Login'}))
      }
    },
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  },
})
</script>

<style>
    .v-item-group.v-bottom-navigation .v-btn.v-size--default {
        height: inherit;
    }
</style>

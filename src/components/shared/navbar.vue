<template>
    <v-bottom-navigation 
      grow
      fixed
      bottom
      color="teal"
      >
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn to="/about">
        <span>About</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn @click="logout">
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
    }
})
</script>

<style>
    .v-item-group.v-bottom-navigation .v-btn.v-size--default {
        height: inherit;
    }
</style>

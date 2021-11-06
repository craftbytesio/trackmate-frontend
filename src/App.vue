<template>
  <v-app>
    <v-container fluid>
      <router-view/>
    </v-container>
    <NavBar></NavBar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import NavBar from './components/shared/navbar.vue';

export default Vue.extend({
  components: { NavBar },
  name: 'App',

  data: () => ({
    //
  }),
});
</script>

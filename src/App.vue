<template>
  <v-app>
    <v-container fluid>
      <Alert />
      <router-view/>
    </v-container>
    <NavBar></NavBar>
  </v-app>
</template>

<script>
import Vue from 'vue';
import NavBar from './components/shared/navbar.vue';
import Alert from "./components/shared/Alert";

export default Vue.extend({
  components: { NavBar, Alert },
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
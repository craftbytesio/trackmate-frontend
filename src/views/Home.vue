<template>
  <div>
    <h1>Hallo {{ user.name }}</h1>
    <TracksDashCard />
    <v-btn
      fab
      class="myFAB"
      color="primary"
      to="/addTrack"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
  import Vue from 'vue'
  import TracksDashCard from '@/components/TracksDashCard.vue'
  import {mapGetters} from "vuex";

  export default Vue.extend({ 
    name: 'Home',
    components: {
      TracksDashCard,
    },
    computed: {
      ...mapGetters({user: 'getCurrentUser'}),
    },
  })
</script>

<style scoped>
  .myFAB{
    position: fixed;
    right: 15px;
    bottom: 90px;
  }
</style>

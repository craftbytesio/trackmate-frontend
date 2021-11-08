<template>
  <div>
    <h1>Hallo {{ this.$store.state.auth.user.name }}</h1>
    <TracksDashCard />
    <v-btn
      fab
      class="myFAB"
      color="primary"
    ><v-icon>mdi-plus</v-icon></v-btn>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import TracksDashCard from '@/components/TracksDashCard.vue'

  export default Vue.extend({ 
    name: 'Home',
    components: {
      TracksDashCard,
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

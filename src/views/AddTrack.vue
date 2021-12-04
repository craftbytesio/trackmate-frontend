<template>
  <v-card
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
  >
    <v-card-title>{{ $t('addTrackTitle')}}</v-card-title>
    <AddTrackForm class="p-5 bg-white border rounded shadow" />

  </v-card>
</template>

<script>
import Vue from 'vue'
import AddTrackForm from '../components/AddTrackForm'

export default Vue.extend({
  name: "AddTrackView",
  components: {
    AddTrackForm,
  },
});
</script>
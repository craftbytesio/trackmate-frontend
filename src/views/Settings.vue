<template>
  <v-card
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
  >
    <v-card-title>{{ $t('settings') }}</v-card-title>
    <v-card-text>
      <LanguageSelect />
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from "vuex"
import LanguageSelect from "../components/shared/LanguageSelect";

export default Vue.extend({
  name: 'Settings',
  components: {
    LanguageSelect
  },
  computed: {
    ...mapGetters({user: 'getCurrentUser'}),
  },
});
</script>
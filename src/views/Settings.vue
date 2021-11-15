<template>
  <v-card
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
  >
    <v-card-title>{{ $t('settings') }}</v-card-title>
    <v-card-text>
      <v-select
          v-model="language.locale"
          :items="languages"
          item-text="name"
          item-value="locale"
          :label="$t('selectLanguageLabel')"
          single-line
          @change="updateLanguage"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from "vuex"
import i18n from '../plugins/i18n'

export default Vue.extend({
  name: 'Settings',
  methods: {
    updateLanguage(locale) {
      i18n.locale = locale
      this.$store.dispatch('updateUserLanguage', locale)
    },
  },
  computed: {
    ...mapGetters({user: 'getCurrentUser'}),
  },
  data() {
    let userLocale = this.$store.getters.getCurrentUser.language
    return {
      language: {locale: userLocale},
      languages: [
        {name: 'Deutsch', locale: 'de'},
        {name: 'English', locale: 'en'}
      ]
    }
  }
});
</script>
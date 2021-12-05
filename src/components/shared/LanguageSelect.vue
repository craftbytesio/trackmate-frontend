<template>
  <v-select
      v-model="language.locale"
      :items="languages"
      item-text="name"
      item-value="locale"
      :label="$t('selectLanguageLabel')"
      single-line
      @change="updateLanguage"
  ></v-select>
</template>

<script>
import i18n from "../../plugins/i18n";

export default {
  name: "LanguageSelect.vue",
  data() {
    let userLocale = this.$store.getters.getCurrentUser.language ?? 'null'
    return {
      language: {locale: userLocale},
      languages: [
        {name: 'Deutsch', locale: 'de'},
        {name: 'English', locale: 'en'}
      ]
    }
  },
  methods: {
    updateLanguage(locale) {
      i18n.locale = locale
      if (this.$store.getters.isLoggedIn){
        this.$store.dispatch('updateUserLanguage', locale)
      }
      this.$emit('changed', locale)
    },
  }
}
</script>

<style scoped>

</style>
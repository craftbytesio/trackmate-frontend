<template>
  <v-card
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
  >
    <v-card-title>{{ $t('register') }}</v-card-title>
    <RegisterForm class="p-5 bg-white border rounded shadow" />

  </v-card>
</template>

<script>
import Vue from 'vue'
import RegisterForm from "../components/RegisterForm";

export default Vue.extend({
  name: "RegisterView",
  components: {
    RegisterForm,
  },
});
</script>
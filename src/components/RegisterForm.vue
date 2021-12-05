<template>
  <form @submit.prevent="register">
    <v-card-text>
      <v-text-field
          label="Name"
          v-model="name"
          type="text"
      ></v-text-field>
      <v-text-field
          label="E-Mail"
          v-model="email"
          type="email"
      ></v-text-field>
      <small >{{ error_email }} </small>
      <LanguageSelect @changed="onSelectChange" />
      <v-text-field
          :label="$t('loginPasswordLabel')"
          v-model="password"
          type="password"
      ></v-text-field>
      <small> {{ error_password }} </small>
      <v-text-field
          :label="$t('confirmationPassword')"
          v-model="passwordConfirmation"
          type="password"
      ></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn
          outlined
          rounded
          block
          color="primary"
          @click="register"
      >
        {{ $t('registerButtonLabel') }}
      </v-btn>
    </v-card-actions>
  </form>
</template>

<script>
import LanguageSelect from "./shared/LanguageSelect";
import {apiClient} from "../service/API";

export default {
  name: "RegisterForm.vue",
  components: {
    LanguageSelect
  },
  methods: {
    onSelectChange(language) {
      this.language = language
    },
    register(){
      if (this.password === this.passwordConfirmation && this.password.length > 0){
        const payload = {
          name: this.name,
          email: this.email,
          password: this.password,
          language: this.language
        }
        apiClient.post('/users', payload)
            .then(() => this.$router.push({name: 'Login'}))
            .catch((error) => {
              console.log(error)
              this.error_password = error.response.data.errors.password[0]
              this.error_email = error.response.data.errors.email[0]
            })
      } else {
        this.password = null
        this.passwordConfirmation = null

        return alert('Passwords do not match')
      }
    }
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      passwordConfirmation: null,
      language: null,
      error_email : null,
      error_password : null
    }
  }
}
</script>

<style scoped>
  small{
    color: red;
    padding-bottom: 10px;
  }
</style>
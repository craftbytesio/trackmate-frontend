<template>
  <div>
    <PageCaption caption='User Registration' />
    <div class="px-8 pt-6 pb-8 mb-4 flex flex-col">
      <div class="mb-4">
        <label class="block text-shadow text-m font-bold mb-2" for="username">
          Username
        </label>
        <input
          v-model="username"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="text"
          required
        >
      </div>
      <div class="mb-4">
        <label class="block text-shadow text-m font-bold mb-2" for="email">
          E-Mail
        </label>
        <input
          v-model="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="email"
          required
        >
      </div>
      <div class="mb-4">
        <label class="block text-shadow text-m font-bold mb-2" for="password">
          Password
        </label>
        <input
          v-model="password"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="password"
          required
        >
      </div>
      <div class="mb-9">
        <label class="block text-shadow text-m font-bold mb-2" for="password_confirmation">
          Password Confirmation
        </label>
        <input
          v-model="password_confirmation"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          type="password"
          required
        >
      </div>
      <div class="flex flex-col items-center space-y-4">
        <button
          class="btn-primary btn-wide text-white font-bold py-2 px-4 rounded"
          type='button'
          @click='createUser'
        >
          Create
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import createUser from '~/apollo/mutations/createUser'

export default {
  name: 'CreateUser',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    async createUser(){
      if (this.password !== this.password_confirmation){
        alert('Passwords do not match!')
        return
      }
      if (this.password.length < 6){
        alert('Password too short. Please enter at least 6 characters.')
        return
      }
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      try {
        await this.$apollo.mutate({
          mutation: createUser,
          variables: payload
        }).then(() => {
          this.$router.push({name: 'Login'})
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

<style scoped>

</style>

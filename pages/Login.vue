<template>
  <div>
    <PageCaption caption='Login' />
    <div class='px-8 pt-6 pb-8 mb-4 flex flex-col'>
      <div class='mb-4'>
        <label class='block text-shadow text-m font-bold mb-2' for='username'>
          Username
        </label>
        <input
          v-model='username'
          class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker outline-none'
          type='text'
        >
      </div>
      <div class='mb-9'>
        <label class='block text-shadow text-m font-bold mb-2' for='password'>
          Password
        </label>
        <input
          v-model='password'
          class='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker outline-none'
          type='password'
          @keyup.enter='handleLoginSubmit'
        >
      </div>
      <div class='flex flex-col items-center space-y-4'>
        <button
          class='btn-primary btn-wide text-white font-bold py-2 px-4 rounded'
          type='button'
          @click='handleLoginSubmit'
        >
          Sign In
        </button>
        <NuxtLink class='inline-block align-baseline font-bold text-xs text-shadow' to='/users/create'>
          Not registered yet? Register here!
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginPage',
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async handleLoginSubmit() {
      const credentials = {
        username: this.username,
        password: this.password
      }

      try {
        // Using our custom strategy
        await this.$auth.loginWith('graphql', credentials)
      } catch (errors) {
        console.log(errors)
      }
    }
  }
}
</script>

<style scoped>

</style>

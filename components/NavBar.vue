<template>
  <div class="navbar-center bg-base-300 py-3 mt-5 mb-10 mx-3 shadow-xl rounded-box flex justify-between items-center">
    <div>
      <NuxtLink to='/' class="btn btn-ghost normal-case text-xl">TrackMate</NuxtLink>
    </div>
    <div v-if='authUser' class='mr-3'>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-auto rounded-full">
            <img src="https://api.lorem.space/image/face?hash=33791">
          </div>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-32">
          <li>
            <NuxtLink to='/profile'>Profile</NuxtLink>
          </li>
          <li>
            <NuxtLink to='/settings'>Settings</NuxtLink>
          </li>
          <li><a @click='handleLogout'>Logout</a></li>
        </ul>
      </div>
    </div>
    <div v-else class="mr-3">
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost">
          <div class="w-auto">
            <NuxtLink to='/login'>
              <FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" class='text-2xl'/>
            </NuxtLink>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    authUser() {
      return this.$auth.loggedIn
    }
  },
  methods: {
    async handleLogout() {
      await this.$auth.logout()
    }
  },
}
</script>

<style scoped>

</style>

<template>
    <v-bottom-navigation 
      grow
      fixed
      bottom
      color="teal"
      >
      <v-btn to="/">
        <span>Home</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn to="/about">
        <span>About</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>
    </v-bottom-navigation>
</template>


<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .v-item-group.v-bottom-navigation .v-btn.v-size--default {
        height: inherit;
    }
</style>

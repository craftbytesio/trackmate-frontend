<template>
  <h1 class='text-3xl text-shadow font-bold mb-5'>{{ caption}}</h1>
</template>

<script>
export default {
  name: 'PageCaption',
  props: {
    caption: {
      type: String,
      default: 'Caption'
    }
  }
}
</script>

<style scoped>

</style>

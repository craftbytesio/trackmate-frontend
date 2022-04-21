<template>
  <NuxtLink
    :to="link"
    class="flex flex-col flex-grow items-center justify-center">

    <FontAwesomeIcon :icon="icon" :class="'text-xl text-' + iconColor"/>
  </NuxtLink>
</template>

<script>
export default {
  name: 'FooterElement',
  props: {
    icon: {
      type: String,
      default: "fa-solid fa-info"
    },
    link: {
      type: String,
      default: "/"
    },
    iconColor: {
      type: String,
      default: 'primary-content'
    }
  }
}
</script>

<style scoped>

</style>

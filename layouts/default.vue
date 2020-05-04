<template>
  <!-- default layout -->
  <div>
    <app-header />
    <nuxt />
    <app-footer />
  </div>
  <!-- //default layout -->
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppFooter from '~/components/footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

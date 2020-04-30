<template>
  <div>
    <!-- header-admin-start -->
    <header class="container mt-40 mb-80">
      <div class="row">
        <div class="col-12">
          <app-header-nav></app-header-nav>
        </div>
      </div>
    </header>
    <!-- header-admin-end -->

    <nuxt />
  </div>
</template>

<script>
import AppHeaderNav from '~/components/cpanel/Nav.vue'

export default {
  components: {
    AppHeaderNav,
  },
}
</script>

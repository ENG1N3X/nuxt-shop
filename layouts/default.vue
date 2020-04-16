<template>
  <div>
    <!-- header-start -->
    <header class="container mb-80">
      <div class="row align-items-center">
        <div class="col-3">
          <header-logo></header-logo>
        </div>
        <div class="col-6">
          <header-nav></header-nav>
        </div>
        <div class="col-3 text-right">
          <a class="headerPhone" href="tel:88005553535">8-800-555-35-35</a>
        </div>
      </div>
    </header>
    <!-- header-end -->
    <!-- nuxt-start -->
    <nuxt />
    <!-- nuxt-end -->
    <!-- footer-start -->
    <footer class="container mt-80">
      <div class="row">
        <div class="col-12">
          <span class="d-block text-center">© 2020 </span>
        </div>
      </div>
    </footer>
    <!-- footer-end -->
  </div>
</template>

<script>
import HeaderLogo from '~/components/header/Logo.vue'
import HeaderNav from '~/components/header/Nav.vue'

export default {
  components: {
    HeaderLogo,
    HeaderNav,
  },
}
</script>

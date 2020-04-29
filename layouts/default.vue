<template>
  <div>
    <!-- header-start -->
    <header class="container mb-80">
      <div class="row align-items-center">
        <div class="col-3">
          <app-header-logo></app-header-logo>
        </div>
        <div class="col-6">
          <app-header-nav></app-header-nav>
        </div>
        <div class="col-2 text-right">
          <a class="headerPhone" :href="`tel:${number}`">{{ numberText }}</a>
        </div>
        <div class="col-1 text-right">
          <nuxt-link to="/basket" class="headerBasket">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            <span v-if="productsCount != 0">{{ productsCount }}</span>
          </nuxt-link>
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
          <span class="d-block text-center">{{ copyrightText }}</span>
        </div>
      </div>
    </footer>
    <!-- footer-end -->
  </div>
</template>

<script>
import AppHeaderLogo from '~/components/header/Logo.vue'
import AppHeaderNav from '~/components/header/Nav.vue'

export default {
  data() {
    return {
      copyrightText: '© 2020',
      number: 88005553535,
      numberText: '8-800-555-35-35',
    }
  },
  components: {
    AppHeaderLogo,
    AppHeaderNav,
  },
  computed: {
    // Метод получения из store/product.js кол-ва элементов в корзине
    productsCount() {
      return this.$store.state.product.list.length
    },
  },
}
</script>

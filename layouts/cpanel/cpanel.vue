<template>
  <!-- cpanel layout -->
  <div>
    <!-- header -->
    <header class="container mt-40 mb-80">
      <div class="row">
        <div class="col-12">
          <nav class="nav headerNav">
            <nuxt-link to="/" class="nav-link" exact>Главная</nuxt-link>
            <nuxt-link to="/cpanel/products" class="nav-link">Товары</nuxt-link>
            <nuxt-link to="/cpanel/users" class="nav-link">Пользователи</nuxt-link>
          </nav>
        </div>
      </div>
    </header>
    <!-- //header -->
    <nuxt />
    <app-footer />
  </div>
  <!-- //cpanel layout -->
</template>

<script>
import AppFooter from '~/components/footer.vue'

export default {
  components: {
    AppFooter,
  },
}
</script>

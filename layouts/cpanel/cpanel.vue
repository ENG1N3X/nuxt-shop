<template>
  <!-- cpanel layout -->
  <div v-if="isUserLogged">
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
  <div v-else>
    <header class="container access">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mainTitle">У вас недостаточно прав, чтобы видеть это.</h1>
          <nuxt-link to="/" class="btn btn-white-blue mt-80">На главную</nuxt-link>
        </div>
      </div>
    </header>
  </div>
  <!-- //cpanel layout -->
</template>

<script>
import AppFooter from '~/components/footer.vue'

export default {
  components: {
    AppFooter,
  },
  middleware: ['auth'],
  computed: {
    isUserLogged() {
      const userAuth = this.$store.getters['auth/userAuth']
      return userAuth.logged
    },
  },
}
</script>

<style lang="sass" scoped>
.access
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
</style>

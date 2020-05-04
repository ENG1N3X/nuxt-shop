<template>
  <!-- cpanel layout -->
  <div v-if="isUserLogged">
    <!-- header -->
    <header class="container mt-40 mb-40">
      <div class="row">
        <div class="col-12">
          <nav class="nav headerNav">
            <nuxt-link to="/cpanel/products" class="nav-link">Товары</nuxt-link>
            <nuxt-link to="/cpanel/users" class="nav-link">Пользователи</nuxt-link>
            <nuxt-link to="/cpanel/orders" class="nav-link">Заказы</nuxt-link>
            <a class="nav-link pointer" exact @click="logout">Выход</a>
          </nav>
        </div>
      </div>
    </header>
    <!-- //header -->
    <section class="container mb-40">
      <div class="row">
        <div class="col-12 text-center">
          <h5 class="mb-0">С возвращением, {{ userAuth.name }} ({{ userAuth.login }})!</h5>
        </div>
      </div>
    </section>
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
  data() {
    return {
      userAuth: null,
    }
  },
  middleware: ['auth'],
  computed: {
    isUserLogged() {
      this.userAuth = this.$store.getters['cpanel/authMod/userAuth']
      return this.userAuth.logged
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$store.dispatch('cpanel/authMod/setUserData', {
        name: null,
        login: null,
        logged: this.$auth.loggedIn,
      })
      this.userAuth = null
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

.pointer
  cursor: pointer
</style>

<template>
  <div v-if="isUserLogged">
    <app-header />
    <section class="container mb-30">
      <div class="row mb-20">
        <div class="col-12">
          <nav class="nav navigation">
            <nuxt-link to="/cpanel/products" class="nav-link">Товары</nuxt-link>
            <nuxt-link to="/cpanel/users" class="nav-link">Администраторы</nuxt-link>
            <nuxt-link to="/cpanel/orders" class="nav-link">Заказы</nuxt-link>
            <a class="nav-link" exact @click="logout" style="cursor: pointer;">Выход</a>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center">
          <h4 class="mb-0 color-545">Вы вошли как - {{ userAuth.name }} ({{ userAuth.login }}).</h4>
        </div>
      </div>
    </section>
    <nuxt />
    <app-footer />
  </div>
  <div v-else>
    <section class="container d-flex justify-content-center align-items-center" style="min-height: 100vh;">
      <div class="row">
        <div class="col-12 text-center">
          <h1 class="mainTitle">У вас недостаточно прав, чтобы видеть это.</h1>
          <nuxt-link to="/" class="btn btn-white-blue mt-80">На главную</nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '~/components/header.vue'
import AppFooter from '~/components/footer.vue'

export default {
  components: {
    AppHeader,
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

<template>
  <!-- login -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Админ-панель логин</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <form class="form-row justify-content-between" @submit.prevent="userAuth(form)">
          <div class="form-group col-12">
            <label>Логин</label>
            <input type="text" class="form-control" v-model="form.login" placeholder="Введите логин" required />
          </div>
          <div class="form-group col-12">
            <label>Пароль</label>
            <input type="text" class="form-control" v-model="form.password" placeholder="Введите пароль" required />
          </div>
          <div class="form-group col-3">
            <button type="submit" class="btn btn-white-blue">Вход</button>
          </div>
          <div class="form-group col-3 text-right">
            <nuxt-link to="/" class="btn btn-white-blue">Выход</nuxt-link>
          </div>
        </form>
      </div>
    </div>
    <notifications group="error" class="error-notify" />
  </section>
  <!-- //login -->
</template>

<script>
export default {
  layout: 'cpanel/auth',
  data() {
    return {
      form: {
        login: 'admin',
        password: 'admin',
      },
    }
  },
  methods: {
    async userAuth(formInfo) {
      try {
        const response = await this.$auth.loginWith('local', { data: formInfo })
        this.$store.dispatch('auth/setUserData', {
          name: response.data.name,
          login: response.data.login,
          logged: this.$auth.loggedIn,
        })

        this.$router.push('/cpanel/products')
      } catch (error) {
        this.$router.push('/cpanel/auth')
        this.$notify({
          group: 'error',
          text: 'Неверный логин или пароль.',
        })
        console.log('[AUTH.VUE] Ошибка метода авторизации', error)
      }
    },
  },
}
</script>

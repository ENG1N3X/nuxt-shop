<template>
  <!-- login -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Вход в админ-панель</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <form class="form-row justify-content-between" @submit.prevent="userAuth(form)">
          <div class="form-group col-12">
            <label>Логин</label>
            <input type="text" class="form-control" v-model="form.login" placeholder="Введите логин" required />
          </div>
          <div class="form-group col-12">
            <label>Пароль</label>
            <input type="text" class="form-control" v-model="form.password" placeholder="Введите пароль" required />
          </div>
          <div class="form-group col-4">
            <button type="submit" class="btn btn-white-blue">Вход</button>
          </div>
          <div class="form-group col-4 text-right">
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
        this.$store.dispatch('cpanel/authMod/setUserData', {
          name: response.data.name,
          login: response.data.login,
          logged: this.$auth.loggedIn,
        })
      } catch (error) {
        this.$notify({
          group: 'error',
          text: error.response.data.message,
        })
        console.log('[AUTH.VUE] Ошибка метода авторизации\n' + error.response.data.message + '\n' + error)
      }
    },
  },
}
</script>

<style lang="sass" scoped>
section
  min-height: 100vh
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
</style>

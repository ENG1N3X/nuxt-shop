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
        <form class="form-row justify-content-between" @submit.prevent="userLogin(login)">
          <div class="form-group col-12">
            <label>Логин</label>
            <input type="text" class="form-control" v-model="login.username" placeholder="Введите логин" required />
          </div>
          <div class="form-group col-12">
            <label>Пароль</label>
            <input type="text" class="form-control" v-model="login.password" placeholder="Введите пароль" required />
          </div>
          <div class="form-group col-3">
            <!-- <nuxt-link type="submit" to="/cpanel/products" class="btn btn-white-blue">Вход</nuxt-link> -->
            <button type="submit" class="btn btn-white-blue">Вход</button>
          </div>
          <div class="form-group col-3 text-right">
            <nuxt-link to="/" class="btn btn-white-blue">Выход</nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- //login -->
</template>

<script>
export default {
  layout: 'cpanel/login',
  data() {
    return {
      login: {
        username: 'admin',
        password: 'admin',
      },
    }
  },
  methods: {
    async userLogin(loginInfo) {
      // console.log(loginInfo)

      // this.$auth.loginWith('local', {
      //   data: loginInfo,
      // })

      try {
        let response = await this.$auth.loginWith('local', { data: loginInfo })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

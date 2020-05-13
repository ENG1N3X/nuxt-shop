<template>
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h4 class="mainTitle">Добавить администратора</h4>
      </div>
    </div>
    <form class="form-row justify-content-center align-items-end" @submit.prevent="create">
      <div class="form-group col-2 mb-0">
        <label>Имя</label>
        <input type="text" v-model="user.name" class="form-control" required />
      </div>
      <div class="form-group col-2 mb-0">
        <label>Логин</label>
        <input type="text" v-model="user.login" class="form-control" required />
      </div>
      <div class="form-group col-2 mb-0">
        <label>Пароль</label>
        <input type="password" v-model="user.password" class="form-control" required />
      </div>
      <div class="form-group col-2 mb-0">
        <button type="submit" class="btn btn-green-white w-100">Добавить</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'admin',
        login: 'admin',
        password: 'admin',
      },
    }
  },
  methods: {
    async create() {
      const error = await this.$store.dispatch('cpanel/users/addUser', this.user)
      if (error) {
        this.$notify({
          group: 'error',
          text: error,
        })
      } else {
        this.$notify({
          group: 'success',
          text: 'Добавлен пользователь ' + this.user.login,
        })
        this.clearForm()
      }
    },
    clearForm() {
      this.user.name = this.user.login = this.user.password = ''
    },
  },
}
</script>

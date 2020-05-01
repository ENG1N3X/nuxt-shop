<template>
  <!-- create-user -->
  <div class="col-3">
    <div class="row mb-30">
      <div class="col-12">
        <h4 class="mainTitle">Добавить</h4>
      </div>
    </div>
    <form class="form-row" @submit.prevent="create">
      <div class="form-group col-12">
        <label for="user-name">Имя</label>
        <input type="text" v-model="user.name" class="form-control" id="user-name" required />
      </div>
      <div class="form-group col-12">
        <label for="user-login">Логин</label>
        <input type="text" v-model="user.login" class="form-control" id="user-login" required />
      </div>
      <div class="form-group col-12">
        <label for="user-password">Пароль</label>
        <input type="password" v-model="user.password" class="form-control" id="user-password" required />
      </div>
      <div class="form-group col-12 text-right">
        <button type="submit" class="btn btn-green-white">Добавить</button>
      </div>
    </form>
  </div>
  <!-- //create-user -->
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'name',
        login: 'login',
        password: 'password',
      },
    }
  },
  methods: {
    async create() {
      try {
        await this.$store.dispatch('users/addUser', this.user)

        console.log('${this.user}')

        this.$notify({
          group: 'success',
          text: 'Добавлен пользователь ' + this.user.name,
        })

        this.clearForm()
      } catch (error) {
        console.error('Ошибка при создании пользователя', error)
      }
    },
    clearForm() {
      this.user.name = this.user.login = this.user.password = ''
    },
  },
}
</script>

<template>
  <!-- users -->
  <section class="container">
    <div class="row">
      <app-create-user />
      <!-- edit-user -->
      <div class="offset-2 col-7">
        <div class="row mb-30">
          <div class="col-12">
            <h4 class="mainTitle">Пользователи</h4>
          </div>
        </div>
        <div class="row mb-20 border pt-2 pb-2 bg-6f6 rounded" v-for="(user, idx) in usersComputed" :key="idx">
          <div class="col-4">
            <label for="user-new-name">Имя</label>
            <input type="text" v-model="user.name" class="form-control" id="user-new-name" />
          </div>
          <div class="col-4">
            <label for="user-new-login">Логин</label>
            <input type="text" v-model="user.login" class="form-control" id="user-new-login" />
          </div>
          <div class="col-4">
            <label for="user-new-password">Пароль</label>
            <input type="password" v-model="user.password" class="form-control" id="user-new-password" />
          </div>
          <div class="col-6 mt-10">
            <label for="user-created">Дата создания</label>
            <p id="user-created" class="mb-0">{{ user.created }}</p>
          </div>
          <div class="col-3 mt-10">
            <button class="btn btn-green-white w-100" @click.prevent="edit(user)">Обновить</button>
          </div>
          <div class="col-3 mt-10">
            <button class="btn btn-red-white w-100" @click.prevent="remove(user._id)">Удалить</button>
          </div>
        </div>
        <h4 v-if="usersComputed == 0" class="mb-0 color-545">Список пользователей пуст.</h4>
      </div>
      <!-- //edit-user -->
    </div>
    <notifications group="success" class="success-notify" />
    <notifications group="error" class="error-notify" />
  </section>
  <!-- //users -->
</template>

<script>
import AppCreateUser from '~/components/cpanel/user/Create'

export default {
  layout: 'cpanel/cpanel',
  components: {
    AppCreateUser,
  },
  computed: {
    usersComputed() {
      return JSON.parse(JSON.stringify(this.$store.getters['cpanel/users/usersList']))
    },
  },
  methods: {
    async edit(item) {
      try {
        await this.$store.dispatch('cpanel/users/updateUser', item)

        this.$notify({
          group: 'success',
          text: 'Пользователь обновлен',
        })
      } catch (error) {
        console.error('Не удалось обновить пользователя', error)
      }
    },
    async remove(itemId) {
      try {
        await this.$axios.$delete('/api/user/remove/' + itemId)
        this.$store.dispatch('cpanel/users/getAllUsers')

        this.$notify({
          group: 'success',
          text: 'Пользователь удален',
        })
      } catch (error) {
        console.error('не удалось удалить пользователя', error)
      }
    },
  },
  // Обновляем хранилище
  async fetch({ store }) {
    try {
      if (store.getters['cpanel/users/usersList'].length === 0) {
        await store.dispatch('cpanel/users/getAllUsers')
        console.log('[USERS.VUE] Вызван fetch получения пользователей')
      }
    } catch (error) {
      console.error('[USERS.VUE] Ошибка получения пользователей', error)
    }
  },
}
</script>

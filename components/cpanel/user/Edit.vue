<template>
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h4 class="mainTitle">Список администраторов</h4>
      </div>
    </div>
    <div class="row mb-20 border pt-2 pb-2 bg-6f6 rounded" v-for="(user, idx) in usersComputed" :key="idx">
      <div class="col-4">
        <label>Имя</label>
        <input type="text" v-model="user.name" class="form-control" />
      </div>
      <div class="col-4">
        <label class="d-flex"
          >Логин
          <div class="ml-1 color-545">(изменять запрещено)</div></label
        >
        <input type="text" v-model="user.login" class="form-control" readonly />
      </div>
      <div class="col-4">
        <label>Пароль</label>
        <input type="password" v-model="user.password" class="form-control" />
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
  </section>
</template>

<script>
export default {
  computed: {
    usersComputed() {
      return JSON.parse(JSON.stringify(this.$store.getters['cpanel/users/usersList']))
    },
  },
  methods: {
    async edit(item) {
      const error = await this.$store.dispatch('cpanel/users/updateUser', item)
      if (error) {
        this.$notify({
          group: 'error',
          text: error,
        })
      } else {
        this.$notify({
          group: 'success',
          text: 'Пользователь обновлен',
        })
      }
    },
    async remove(itemId) {
      try {
        const result = await this.$axios.$delete('/api/user/remove/' + itemId)
        this.$notify({
          group: 'success',
          text: result.message,
        })

        await this.$store.dispatch('cpanel/users/getAllUsers')
      } catch (error) {
        console.error('Не удалось удалить пользователя', error)
        this.$notify({
          group: 'error',
          text: 'Не удалось удалить пользователя',
        })
      }
    },
  },
}
</script>

<style lang="sass"></style>

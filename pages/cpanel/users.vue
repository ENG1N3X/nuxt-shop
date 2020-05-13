<template>
  <div>
    <app-create-user class="mb-30" />
    <app-edit-user />
    <notifications group="success" class="success-notify" />
    <notifications group="error" class="error-notify" />
  </div>
</template>

<script>
import AppCreateUser from '~/components/cpanel/user/Create'
import AppEditUser from '~/components/cpanel/user/Edit'

export default {
  layout: 'cpanel',
  components: {
    AppCreateUser,
    AppEditUser,
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

<style lang="sass"></style>

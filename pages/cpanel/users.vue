<template>
  <!-- users -->
  <section class="container">
    <div class="row">
      <app-create-user />
      <app-edit-user />
    </div>
    <notifications group="success" class="success-notify" />
  </section>
  <!-- //users -->
</template>

<script>
import AppCreateUser from '~/components/cpanel/user/Create'
import AppEditUser from '~/components/cpanel/user/Edit'

export default {
  layout: 'cpanel/cpanel',
  components: {
    AppCreateUser,
    AppEditUser,
  },
  // Обновляем хранилище
  async fetch({ store }) {
    try {
      if (store.getters['users/usersList'].length === 0) {
        await store.dispatch('users/getAllUsers')
        console.log('[USERS.VUE] Вызван fetch получения пользователей')
      }
    } catch (error) {
      console.error('[USERS.VUE] Ошибка получения пользователей', error)
    }
  },
}
</script>

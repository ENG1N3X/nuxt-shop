<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <app-order />
      </div>
    </div>
    <notifications group="success" class="success-notify" />
    <notifications group="error" class="error-notify" />
  </section>
</template>

<script>
import AppOrder from '~/components/cpanel/orders'

export default {
  layout: 'cpanel',
  components: {
    AppOrder,
  },
  // Обновляем хранилище
  async fetch({ store }) {
    try {
      if (store.getters['cpanel/orders/ordersList'].length === 0) {
        await store.dispatch('cpanel/orders/getAllOrders')
        console.log('[ORDERS.VUE] Вызван fetch получения заказов')
      }
    } catch (error) {
      console.error('[ORDERS.VUE] Ошибка получения заказов', error)
    }
  },
}
</script>

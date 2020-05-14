<template>
  <section class="container">
    <div class="row align-items-center mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Заказы</h2>
      </div>
    </div>
    <div class="row align-items-center mb-10" v-for="(order, i) in ordersComputed" :key="i">
      <div class="col-2">
        <label>Номер заказа</label>
        <p>{{ order.order }}</p>
      </div>
      <div class="col-2">
        <label>Список заказа</label>
        <nuxt-link class="d-block color-883 text-decoration-none" :to="`/product/${item._id}`" v-for="(item, j) in orderList(order.list)" :key="j"> {{ item.title }} ({{ item.count }} шт.) </nuxt-link>
      </div>
      <div class="col-2">
        <label>Сумма заказа</label>
        <p>{{ order.total }}</p>
      </div>
      <div class="col-2">
        <label>Дата заказа</label>
        <p>{{ order.date }}</p>
      </div>
      <div class="col-2">
        <label>Статус заказа</label>
        <p>{{ order.status }}</p>
      </div>
      <div class="col-2">
        <button class="btn btn-red-white w-100" @click.prevent="remove(order._id)">Удалить</button>
      </div>
    </div>
    <div class="row" v-if="ordersComputed.length === 0">
      <div class="col-12">
        <p class="text-center notFound">В данный момент нет заказов в магазине</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    ordersComputed() {
      return this.$store.getters['cpanel/orders/ordersList']
    },
  },
  methods: {
    async remove(itemId) {
      try {
        const result = await this.$axios.$delete('/api/order/remove/' + itemId)
        this.$notify({
          group: 'success',
          text: result.message,
        })
        await this.$store.dispatch('cpanel/orders/getAllOrders')
      } catch (error) {
        console.error('Не удалось удалить заказ', error)
        this.$notify({
          group: 'error',
          text: 'Не удалось удалить заказ',
        })
      }
    },
    orderList(list) {
      return JSON.parse(list)
    },
  },
}
</script>

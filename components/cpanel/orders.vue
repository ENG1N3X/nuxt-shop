<template>
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Заказы</h2>
      </div>
    </div>
    <div class="row" v-for="(order, idx) in ordersComputed" :key="idx">
      <div class="col-12">
        {{ order.title }}
        {{ order.description }}
        {{ order.count }}
        {{ order.total }}
        {{ order.image }}
        {{ order.date }}
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
  data() {
    return {}
  },
  computed: {
    ordersComputed() {
      return this.$store.getters['cpanel/orders/ordersList']
    },
  },
}
</script>

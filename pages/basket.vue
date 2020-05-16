<template>
  <!-- basket -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Корзина</h2>
      </div>
    </div>
    <div v-if="basketComputed != 0" class="row mb-30">
      <div class="col-8">
        <h3 class="d-flex">
          Итого:
          <div class="pl-10 color-545">{{ basketProductsTotal }} рублей</div>
        </h3>
      </div>
      <div class="col-2">
        <button class="btn btn-yellow-white w-100" @click="clearBasket">Очистить</button>
      </div>
      <div class="col-2">
        <button type="submit" class="btn btn-green-white w-100" @click="createOrder(basketProductsTotal)">Оплатить</button>
      </div>
      <div class="col-12 mt-30">
        <div class="row mb-30 pt-2 pb-2 bg-6f6 rounded mb-20" v-for="(product, idx) in basketComputed" :key="idx">
          <div class="col-6">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <p class="productPrice">
                  Цена:<br />
                  {{ product.price }}
                </p>
              </div>
              <div class="col-6">
                <p class="productCount">
                  Количество:<br />
                  {{ product.count }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="productTitle">{{ product.title }}</h2>
              </div>
              <div class="col-12">
                <p class="productDesc">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">
        <h4 class="mb-0 color-545">В коризне пусто</h4>
      </div>
    </div>
    <notifications group="success" class="success-notify" />
  </section>
  <!-- //basket -->
</template>

<script>
const moment = require('moment')

export default {
  head: {
    script: [{ src: 'https://api.fondy.eu/static_common/v1/checkout/ipsp.js' }],
  },
  computed: {
    // Получаем продукты из store/basket.js
    basketComputed() {
      return this.$store.getters['basket/basketProducts']
    },
    // Получаем общую цену за все продукты из store/basket.js
    basketProductsTotal() {
      return this.$store.getters['basket/basketProductsTotal']
    },
  },
  methods: {
    // Метод очистки store/basket.js от продуктов
    clearBasket() {
      this.$store.commit('basket/clear')
      this.$notify({
        group: 'success',
        text: 'Корзина очищена',
      })
    },
    // Тестовая оплата
    createOrder(amount) {
      const order = moment().format('YYYYMMDDHHmmss').toString()
      const button = $ipsp.get('button')
      button.setMerchantId(1446024)
      button.setAmount(amount, 'RUB', true)
      // button.setResponseUrl(`http://localhost:3000/status?result=success&order=${order}`) // localhost
      button.setResponseUrl(`https://nuxtshop.herokuapp.com/status?result=success&order=${order}`) // herokuapp
      button.setHost('api.fondy.eu')
      button.addField({ label: 'Заказ', name: 'order', value: order, readonly: true })
      location.href = button.getUrl()

      if (location.href) {
        this.create(order, amount, this.basketComputed)
      }

      // this.create(order, amount, this.basketComputed)
    },
    async create(order, total, list) {
      const fd = new FormData()
      fd.append('order', order)
      fd.append('list', JSON.stringify(list))
      fd.append('total', total)
      fd.append('date', moment().format('YYYY-MM-DD-HH-mm-ss').toString())
      await this.$store.dispatch('cpanel/orders/addOrder', fd)
    },
  },
}
</script>

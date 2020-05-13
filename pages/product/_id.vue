<template>
  <!-- product -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Описание товара</h1>
      </div>
    </div>
    <div class="row mb-30">
      <div class="offset-10 col-2">
        <button class="btn btn-green-black w-100" @click="addToBasket(product)">В корзину</button>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-6">
        <img class="img-fluid" :src="`../../${product.image}`" :alt="product.title" />
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <p class="productPrice">
              Цена за штуку:<br />
              {{ product.price }}
            </p>
          </div>
          <div class="col-6">
            <p class="productCount">
              Выбрано / Всего:
              <br />
              {{ form.count }} / {{ product.count }}
            </p>
            <button class="btn btn-danger" @click="form.count--" :disabled="form.count == 1">-</button>
            <button class="btn btn-success" @click="form.count++" :disabled="form.count == product.count">+</button>
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
    <notifications group="success" class="success-notify" />
  </section>
  <!-- //product -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        count: 1,
      },
    }
  },
  async asyncData({ params, $axios }) {
    try {
      const product = await $axios.get('/api/product/get/' + params.id)
      return { product: product.data }
    } catch (error) {
      console.error('error\n', error)
    }
  },
  methods: {
    // Метод для отправки продукта в store/basket.js
    addToBasket(item) {
      let request = Object.assign({}, item)
      request.count = this.form.count
      this.$store.commit('basket/add', request)
      this.$notify({
        group: 'success',
        text: 'Товар добавлен в корзину',
      })
    },
  },
}
</script>

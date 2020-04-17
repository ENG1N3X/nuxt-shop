<template>
  <div>
    <!-- basket-start -->
    <section class="container">
      <div class="row mb-30">
        <div class="col-12">
          <h2 class="mainTitle">Корзина</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <h4 class="mb-0 color-545">В коризне пусто</h4>
        </div>
      </div>
      <div class="row mb-30">
        <div class="col-10">
          <h3 class="d-flex">
            Итого:
            <div class="pl-10 color-545">1000 рублей</div>
          </h3>
        </div>
        <div class="col-2">
          <button class="btn buyBtn">Оплатить</button>
        </div>
      </div>
      <div class="row">
        <div class="col-12" v-for="i in 3" :key="i">
          <app-product></app-product>
        </div>
      </div>
    </section>
    <!-- basket-end -->
  </div>
</template>

<script>
import AppProduct from '~/components/product.vue'
export default {
  components: {
    AppProduct,
  },
}
</script>

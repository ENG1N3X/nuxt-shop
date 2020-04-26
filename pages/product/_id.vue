<template>
  <!-- product-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Описание товара</h1>
      </div>
    </div>

    <div class="row align-items-center product">
      <div class="col-10">
        <h2 class="productTitle">Товар</h2>
      </div>
      <div class="col-2">
        <button class="btn buyBtn">В корзину</button>
      </div>
      <div class="col-6 text-center">
        <img class="img-fluid productImg" src="~assets/img/products/product.png" alt="product" />
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6 text-center">
            <p class="productPrice">500 рублей</p>
          </div>
          <div class="col-6 text-center">
            <p class="productCount">500 штук</p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p class="productDesc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum, quo itaque esse corporis, incidunt laborum laboriosam porro expedita facere est iste et error nostrum consequuntur ex
              explicabo tempore sint.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- product-end -->
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    try {
      console.log(params._id)
      const product = await $axios.get('/api/product/get/' + params._id)
      return { product: product.data }
    } catch (e) {
      console.error('e', e)
    }
  },
}
</script>

<template>
  <div>
    <!-- choice-start -->
    <section class="container">
      <div class="row mb-30">
        <div class="col-12">
          <h2 class="mainTitle">Товары</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4 mb-40" v-for="num in 6" :key="num">
          <nuxt-link to="/product" class="choice">
            <img class="img-fluid choiceImg" src="~assets/img/products/product.png" alt="product" />
            <h4 class="choiceTitle">Мой продукт #{{ num }}</h4>
            <button class="btn choiceBtn">Подробнее</button>
          </nuxt-link>
        </div>
      </div>
    </section>
    <!-- choice-end -->
  </div>
</template>

<template>
  <!-- default layout -->
  <div>
    <!-- header -->
    <header class="container mb-80">
      <div class="row align-items-center">
        <div class="col-3">
          <nuxt-link to="/" class="headerLogo">
            <img class="headerLogo__img anim-rotate" src="~/assets/img/logo.png" alt="logo" />
            <span class="headerLogo__text">{{ logoText }}</span>
          </nuxt-link>
        </div>
        <div class="col-6">
          <nav class="nav headerNav">
            <nuxt-link to="/" class="nav-link" exact>Главная</nuxt-link>
            <nuxt-link to="/about" class="nav-link">О Нас</nuxt-link>
            <nuxt-link to="/cpanel/auth" class="nav-link">Админка</nuxt-link>
          </nav>
        </div>
        <div class="col-2 text-right">
          <a class="headerPhone" :href="`tel:${number}`">{{ numberText }}</a>
        </div>
        <div class="col-1 text-right">
          <nuxt-link to="/basket" class="headerBasket">
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>
            <span v-if="productsCount != 0">{{ productsCount }}</span>
          </nuxt-link>
        </div>
      </div>
    </header>
    <!-- //header -->
    <nuxt />
    <!-- footer -->
    <footer class="container mt-80">
      <div class="row">
        <div class="col-12">
          <span class="d-block text-center">{{ copyrightText }}</span>
        </div>
      </div>
    </footer>
    <!-- //footer -->
  </div>
  <!-- //default layout -->
</template>

<script>
export default {
  data() {
    return {
      logoText: 'Наш крутой магазин',
      copyrightText: '© 2020',
      number: 88005553535,
      numberText: '8-800-555-35-35',
    }
  },
  computed: {
    // Метод получения из store/basket.js кол-ва элементов в корзине
    productsCount() {
      return this.$store.state.basket.basketProducts.length
    },
  },
}
</script>

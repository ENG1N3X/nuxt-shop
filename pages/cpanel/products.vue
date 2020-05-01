<template>
  <!-- products -->
  <section class="container">
    <app-create-product />
    <app-edit-product />
  </section>
  <!-- //products -->
</template>

<script>
import AppCreateProduct from '~/components/cpanel/product/Create'
import AppEditProduct from '~/components/cpanel/product/Edit'

export default {
  layout: 'cpanel/cpanel',
  components: {
    AppCreateProduct,
    AppEditProduct,
  },
  // Обновляем хранилище
  async fetch({ store }) {
    try {
      if (store.getters['products/productsList'].length === 0) {
        await store.dispatch('products/getAllProducts')
        console.log('[PRODUCTS.VUE] Вызван fetch получения продуктов')
      }
    } catch (error) {
      console.error('[PRODUCTS.VUE] Ошибка получения продуктов', error)
    }
  },
}
</script>

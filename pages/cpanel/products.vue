<template>
  <div>
    <app-create-product class="mb-30" />
    <app-edit-product />
    <notifications group="success" class="success-notify" />
    <notifications group="error" class="error-notify" />
  </div>
</template>

<script>
import AppCreateProduct from '~/components/cpanel/product/Create'
import AppEditProduct from '~/components/cpanel/product/Edit'

export default {
  layout: 'cpanel',
  components: {
    AppCreateProduct,
    AppEditProduct,
  },

  // Обновляем хранилище
  async fetch({ store }) {
    try {
      if (store.getters['cpanel/products/productsList'].length === 0) {
        await store.dispatch('cpanel/products/getAllProducts')
        console.log('[PRODUCTS.VUE] Вызван fetch получения продуктов')
      }
    } catch (error) {
      console.error('[PRODUCTS.VUE] Ошибка получения продуктов', error)
    }
  },
}
</script>

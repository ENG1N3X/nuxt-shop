<template>
  <!-- admin-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Добавить товар</h1>
      </div>
    </div>

    <!-- create-product-component -->
    <app-create-product @created="() => getAll()" />
    <!-- //create-product-component -->

    <!-- editProduct-start -->
    <div class="row align-items-center editProduct" v-for="(product, idx) in products" :key="idx">
      <div class="col-6">
        <h4 class="editProduct__name">
          {{ product.title }}
        </h4>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <button class="btn editBtn" @click="product.isActive = !product.isActive">Редактировать</button>
          </div>
          <div class="col-6">
            <button type="submit" @click.prevent="remove(product._id)" class="btn removeBtn">Удалить</button>
          </div>
        </div>
      </div>
      <div :class="['col-12 editProduct__block', product.isActive ? 'active' : '']">
        <form class="form-row mt-20">
          <div class="form-group col-8">
            <label for="price">Изменить название</label>
            <input type="text" v-model="product.title" class="form-control" id="title" />
          </div>
          <div class="form-group col-2">
            <label for="price">Изменить цену</label>
            <input type="number" v-model="product.price" class="form-control" id="price" />
          </div>
          <div class="form-group col-2">
            <label for="count">Изменить количество</label>
            <input type="number" v-model="product.count" class="form-control" id="count" />
          </div>
          <div class="form-group col-12">
            <label for="description">Описание товара</label>
            <textarea class="form-control" v-model="product.description" id="description" rows="3"></textarea>
          </div>
          <button type="submit" @click.prevent="edit(product)" @click="product.isActive = false" class="btn submitBtn">Изменить</button>
        </form>
      </div>
    </div>
    <!-- editProduct-end -->
  </section>
  <!-- admin-end -->
</template>

<script>
import AppCreateProduct from '~/components/admin/product/Create'

export default {
  components: {
    AppCreateProduct,
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getAll()
  },
  methods: {
    async getAll() {
      try {
        this.products = await this.$axios.$get('/api/product/getall')
      } catch (e) {
        console.error('не удалось получить список товаров', e)
      }
    },
    async edit(item) {
      try {
        await this.$axios.$put('/api/product/update/' + item._id, item)
        await this.getAll()
      } catch (e) {
        console.error('не удалось обновить товар', e)
      }
    },
    async remove(itemId) {
      try {
        await this.$axios.$delete('/api/product/remove/' + itemId)
        await this.getAll()
      } catch (e) {
        console.error('не удалось удалить товар', e)
      }
    },
  },
}
</script>

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

    <div class="row mb-30" v-if="products != 0">
      <div class="col-12">
        <h1 class="mainTitle">Редактировать товар</h1>
      </div>
    </div>
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
            <button class="btn removeBtn" type="submit" @click.prevent="remove(product._id)">Удалить</button>
          </div>
        </div>
      </div>
      <div :class="['col-12 editProduct__block', product.isActive ? 'active' : '']">
        <form class="form-row mt-20">
          <div class="form-group col-5">
            <img v-if="selectedNewImage" :src="selectedImageURL" alt="new picture" class="img-fluid" />
            <img v-else :src="`../../${product.image}`" alt="old product" class="img-fluid" />
          </div>
          <div class="form-group col-7">
            <div class="form-row">
              <div class="form-group col-12">
                <label for="price">Изменить название</label>
                <input type="text" v-model="product.title" class="form-control" id="title" />
              </div>
              <div class="form-group col-6">
                <label for="price">Изменить цену</label>
                <input type="number" v-model="product.price" class="form-control" id="price" />
              </div>
              <div class="form-group col-6">
                <label for="count">Изменить количество</label>
                <input type="number" v-model="product.count" class="form-control" id="count" />
              </div>
              <div class="form-group col-12">
                <label for="description">Описание товара</label>
                <textarea class="form-control" v-model="product.description" id="description" rows="3"></textarea>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <input type="file" name="file" id="file2" class="form-control-file inputFile" @change="onFileSelected" />
                <label for="file2">Выберите картинку</label>
              </div>
              <div class="form-group col-6">
                <button type="submit" @click.prevent="edit(product)" @click="product.isActive = false" class="btn submitBtn">Изменить</button>
              </div>
            </div>
          </div>
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
      selectedNewImage: null,
      selectedImageURL: null,
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
        const fd = new FormData()
        fd.append('title', item.title)
        fd.append('description', item.description)
        fd.append('count', item.count)
        fd.append('price', item.price)

        if (this.selectedNewImage) {
          this.$axios.setHeader('Content-Type', 'multipart/form-data')
          fd.append('image', this.selectedNewImage, this.selectedNewImage.name)
        }

        await this.$axios.$put('/api/product/update/' + item._id, fd)
        await this.getAll()

        this.selectedNewImage = this.selectedImageURL = null
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
    onFileSelected(event) {
      this.selectedNewImage = event.target.files[0]
      if (this.selectedNewImage) {
        this.selectedImageURL = URL.createObjectURL(this.selectedNewImage)

        console.log(this.selectedNewImage)
        console.log(this.selectedNewImage.name)
        console.log(this.selectedImageURL)
      }
    },
  },
}
</script>

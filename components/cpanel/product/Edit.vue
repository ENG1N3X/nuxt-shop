<template>
  <!-- edit-product -->
  <div>
    <div v-if="productsComputed != 0" class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Редактировать товар</h1>
      </div>
    </div>
    <div class="row align-items-center editProduct" v-for="(product, idx) in productsComputed" :key="idx">
      <div class="col-6">
        <h4 class="editProduct__name">
          {{ product.title }}
        </h4>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <button class="btn btn-yellow-white w-100" @click="product.isActive = !product.isActive">Редактировать</button>
          </div>
          <div class="col-6">
            <button class="btn btn-red-white w-100" type="submit" @click.prevent="remove(product._id)">Удалить</button>
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
                <label for="title">Изменить название</label>
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
                <input type="file" name="file" id="file2" class="form-control-file input-blue-white" @change="onFileSelected" />
                <label for="file2">Выберите картинку</label>
              </div>
              <div class="form-group offset-2 col-4">
                <button type="submit" @click.prevent="edit(product)" @click="product.isActive = false" class="btn btn-green-white w-100">Обновить</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <!-- //edit-product -->
</template>

<script>
export default {
  data() {
    return {
      products: [],
      selectedNewImage: null,
      selectedImageURL: null,
    }
  },
  computed: {
    productsComputed() {
      return (this.products = JSON.parse(JSON.stringify(this.$store.getters['products/productsList'])))
    },
  },
  methods: {
    async edit(item) {
      try {
        const fd = new FormData()
        fd.append('_id', item._id)
        fd.append('title', item.title)
        fd.append('description', item.description)
        fd.append('count', item.count)
        fd.append('price', item.price)

        if (this.selectedNewImage) {
          this.$axios.setHeader('Content-Type', 'multipart/form-data')
          fd.append('image', this.selectedNewImage, this.selectedNewImage.name)
        }

        await this.$store.dispatch('products/updateProduct', fd)

        this.$notify({
          group: 'success',
          text: 'Товар обновлен',
        })

        this.selectedNewImage = this.selectedImageURL = null
      } catch (error) {
        console.error('[PRODUCTS.VUE] Не удалось обновить товар', error)
      }
    },
    async remove(itemId) {
      try {
        await this.$axios.$delete('/api/product/remove/' + itemId)
        this.$store.dispatch('products/getAllProducts')

        this.$notify({
          group: 'success',
          text: 'Товар удален из базы',
        })
      } catch (error) {
        console.error('[PRODUCTS.VUE] Не удалось удалить товар', error)
      }
    },
    onFileSelected(event) {
      this.selectedNewImage = event.target.files[0]
      if (this.selectedNewImage) {
        this.selectedImageURL = URL.createObjectURL(this.selectedNewImage)
      }
    },
  },
}
</script>

<template>
  <section class="container">
    <div v-if="productsComputed != 0" class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Редактировать товар</h1>
      </div>
    </div>
    <div class="row align-items-center editProduct" v-for="(product, idx) in displayedProducts" :key="idx">
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
    <div class="row">
      <div class="col-12 text-center">
        <div class="btn-group">
          <button type="button" class="btn btn-outline-secondary" v-if="page != 1" @click="page--"><i class="fa fa-angle-double-left"></i></button>
          <button type="button" class="btn btn-outline-secondary" v-for="(pageNumber, idx) in pages.slice(page - 1, page + 1)" :key="idx" @click="page = pageNumber">{{ pageNumber }}</button>
          <button type="button" class="btn btn-outline-secondary" v-if="page < pages.length" @click="page++"><i class="fa fa-angle-double-right"></i></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      selectedNewImage: null,
      selectedImageURL: null,
      page: 1,
      perPage: 5,
      pages: [],
    }
  },
  computed: {
    productsComputed() {
      return (this.products = JSON.parse(JSON.stringify(this.$store.getters['cpanel/products/productsList'])))
    },
    displayedProducts() {
      return this.paginate(this.products)
    },
  },
  methods: {
    async edit(item) {
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

      const error = await this.$store.dispatch('cpanel/products/updateProduct', fd)
      if (error) {
        this.$notify({
          group: 'error',
          text: error,
        })
      } else {
        this.$notify({
          group: 'success',
          text: 'Товар обновлен',
        })
      }
    },
    async remove(itemId) {
      try {
        const result = await this.$axios.$delete('/api/product/remove/' + itemId)
        this.$notify({
          group: 'success',
          text: result.message,
        })

        await this.$store.dispatch('cpanel/products/getAllProducts')
      } catch (error) {
        console.error('Не удалось удалить продукт', error)
        this.$notify({
          group: 'error',
          text: 'Не удалось удалить продукт',
        })
      }
    },
    onFileSelected(event) {
      this.selectedNewImage = event.target.files[0]
      if (this.selectedNewImage) {
        this.selectedImageURL = URL.createObjectURL(this.selectedNewImage)
      }
    },
    setPages() {
      let numberOfPages = Math.ceil(this.products.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate(products) {
      let page = this.page
      let perPage = this.perPage
      let from = page * perPage - perPage
      let to = page * perPage
      return products.slice(from, to)
    },
  },
  watch: {
    products() {
      this.setPages()
    },
  },
}
</script>

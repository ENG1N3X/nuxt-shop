<template>
  <!-- create-product -->
  <div>
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Добавить товар</h1>
      </div>
    </div>
    <form class="form-row mb-50" @submit.prevent="create">
      <div class="col-4 border d-flex justify-content-center align-items-center">
        <img v-if="selectedImageURL" :src="selectedImageURL" alt="product" />
      </div>
      <div class="offset-2 col-6">
        <div class="form-row">
          <div class="form-group col-12">
            <label for="name">Название товара</label>
            <input type="text" v-model="form.title" class="form-control" id="name" placeholder="Введите название" required />
          </div>
          <div class="form-group col-5">
            <label for="price">Цена товара</label>
            <input type="number" v-model="form.price" class="form-control" id="price" placeholder="Введите цену" required />
          </div>
          <div class="form-group offset-2 col-5">
            <label for="count">Количество товара</label>
            <input type="number" v-model="form.count" class="form-control" id="count" placeholder="Введите количество" required />
          </div>
          <div class="form-group col-12">
            <label for="description">Описание товара</label>
            <textarea class="form-control" v-model="form.description" id="description" rows="3" placeholder="Введите описание" required></textarea>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-6">
            <input type="file" name="file" id="file" class="form-control-file input-blue-white" @change="onFileSelected" />
            <label for="file">Выберите картинку</label>
          </div>
          <div class="form-group offset-2 col-4">
            <button type="submit" class="btn btn-green-white w-100">Добавить</button>
          </div>
        </div>
      </div>
    </form>
  </div>
  <!-- //create-product -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: 'Test title',
        description: 'test desc',
        count: 111,
        price: 222,
        image: null,
      },
      selectedImageURL: null,
    }
  },
  methods: {
    async create() {
      const fd = new FormData()
      fd.append('title', this.form.title)
      fd.append('description', this.form.description)
      fd.append('count', this.form.count)
      fd.append('price', this.form.price)

      if (this.form.image) {
        this.$axios.setHeader('Content-Type', 'multipart/form-data')
        fd.append('image', this.form.image, this.form.image.name)
      }

      const error = await this.$store.dispatch('cpanel/products/addProduct', fd)
      if (error) {
        this.$notify({
          group: 'error',
          text: error,
        })
      } else {
        this.$notify({
          group: 'success',
          text: 'Товар добавлен в базу',
        })
        this.clearForm()
      }
    },
    clearForm() {
      this.form.title = this.form.description = ''
      this.form.count = this.form.price = this.form.image = this.selectedImageURL = null
    },
    onFileSelected(event) {
      this.form.image = event.target.files[0]
      if (this.form.image) {
        this.selectedImageURL = URL.createObjectURL(this.form.image)
      }
      event.target.value = ''
    },
  },
}
</script>

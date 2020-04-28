<template>
  <form class="form-row mb-50" @submit.prevent="create">
    <div class="col-6">
      <div class="form-row col-12">
        <div class="form-group d-flex align-items-center">
          <input type="file" class="form-control-file" @change="onFileSelected" />
        </div>
      </div>
      <div class="form-row" v-if="selectedImageURL">
        <div class="form-group col-12">
          <img :src="selectedImageURL" alt="product" />
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="form-row">
        <div class="form-group col-12">
          <label for="name">Название товара</label>
          <input type="text" v-model="form.title" class="form-control" id="name" placeholder="Введите название" />
        </div>
        <div class="form-group col-5">
          <label for="price">Цена товара</label>
          <input type="number" v-model="form.price" class="form-control" id="price" placeholder="Введите цену" />
        </div>
        <div class="form-group offset-2 col-5">
          <label for="count">Количество товара</label>
          <input type="number" v-model="form.count" class="form-control" id="count" placeholder="Введите количество" />
        </div>
        <div class="form-group col-12">
          <label for="description">Описание товара</label>
          <textarea class="form-control" v-model="form.description" id="description" rows="3" placeholder="Введите описание"></textarea>
        </div>
      </div>
    </div>
    <button type="submit" class="btn submitBtn">Добавить</button>
  </form>
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
      try {
        const fd = new FormData()
        fd.append('title', this.form.title)
        fd.append('description', this.form.description)
        fd.append('count', this.form.count)
        fd.append('price', this.form.price)

        if (this.form.image) {
          this.$axios.setHeader('Content-Type', 'multipart/form-data')
          fd.append('image', this.form.image, this.form.image.name)
        }

        await this.$axios.$post('/api/product/create', fd)
        this.$emit('created')
        this.clearForm()
      } catch (e) {
        console.error('Ошибка при создании товара', e)
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
    },
  },
}
</script>

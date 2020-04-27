<template>
  <form class="form-row mb-50" @submit.prevent="create">
    <div class="col-6">
      <div class="form-row col-12">
        <div class="form-group d-flex align-items-center">
          <input type="file" class="form-control-file" @change="OnFileSelected" required />
          <!-- <button class="btn submitBtn" @click="OnFileUpload">Загрузить</button> -->
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
    </div>
    <button type="submit" class="btn submitBtn">Добавить</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        count: null,
        price: null,
        image: null,
      },
      selectedImage: null,
      selectedImageURL: null,
    }
  },
  methods: {
    async create() {
      try {
        this.OnFileUpload()
        await this.$axios.$post('/api/product/create', this.form).then((res) => console.log(res))
        this.$emit('created')
        this.clearForm()
      } catch (e) {
        console.error('Ошибка при создании товара', e)
      }
    },
    clearForm() {
      this.form.title = this.form.description = ''
      this.form.count = this.form.price = this.form.image = this.selectedImage = this.selectedImageURL = null
      console.log('Reset vars')
    },
    OnFileSelected(event) {
      this.selectedImage = event.target.files[0]
      if (this.selectedImage) {
        console.log(this.selectedImage)
        this.selectedImageURL = URL.createObjectURL(this.selectedImage)
        console.log(this.selectedImageURL)
      }
    },
    OnFileUpload() {
      this.form.image = new FormData()
      this.form.image.append('image', this.selectedImage, this.selectedImage.name)
      console.log(this.form.image)
      // console.log(fd)
      // await this.$axios.$post('/api/product/create', fd).then((res) => {
      //   console.log(res)
      // })
    },
  },
}
</script>

<style></style>

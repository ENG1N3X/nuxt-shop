<template>
  <form class="form-row mb-50" @submit.prevent="create">
    <div class="col-6 d-flex align-items-end">
      <div class="form-group">
        <label for="picture">Добавить фото</label>
        <input type="file" class="form-control-file" id="picture" />
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
        count: NaN,
        price: NaN,
      },
    }
  },
  methods: {
    async create() {
      try {
        await this.$axios.$post('/api/product/create', this.form)
        this.$emit('created')
        this.clearForm()
      } catch (e) {
        console.error('Ошибка при создании товара', e)
      }
    },
    clearForm() {
      this.form.title = ''
      this.form.description = ''
      this.form.count = NaN
      this.form.price = NaN
    },
  },
}
</script>

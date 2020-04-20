<template>
  <!-- admin-start -->
  <section class="container" id="app">
    <div class="row mb-30">
      <div class="col-12">
        <h1 class="mainTitle">Добавить товар</h1>
      </div>
    </div>
    <form class="form-row mb-50">
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
            <input type="text" class="form-control" id="name" />
          </div>
          <div class="form-group col-4">
            <label for="price">Цена товара</label>
            <input type="number" class="form-control" id="price" />
          </div>
          <div class="form-group offset-4 col-4">
            <label for="count">Количество товара</label>
            <input type="number" class="form-control" id="count" />
          </div>
          <div class="form-group col-12">
            <label for="description">Описание товара</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
        </div>
      </div>
      <button type="submit" class="btn submitBtn">Добавить</button>
    </form>
    <!-- editProduct-start -->
    <div class="row align-items-center editProduct" v-for="i in 3" :key="i">
      <div class="col-6">
        <h4 class="editProduct__name">
          Название товара
        </h4>
      </div>
      <div class="col-6">
        <div class="row">
          <div class="col-6">
            <button class="btn editBtn" @click="isActive = !isActive">Редактировать</button>
          </div>
          <div class="col-6">
            <button type="submit" class="btn removeBtn">Удалить</button>
          </div>
        </div>
      </div>
      <div :class="['col-12 editProduct__block', isActive ? 'active' : '']">
        <form class="form-row mt-20">
          <div class="form-group col-6">
            <label for="price">Изменить название</label>
            <input type="text" class="form-control" id="price" />
          </div>
          <div class="form-group col-3">
            <label for="price">Изменить цену</label>
            <input type="number" class="form-control" id="price" />
          </div>
          <div class="form-group col-3">
            <label for="count">Изменить количество</label>
            <input type="number" class="form-control" id="count" />
          </div>
          <div class="form-group col-12">
            <label for="description">Описание товара</label>
            <textarea class="form-control" id="description" rows="3"></textarea>
          </div>
          <button type="submit" class="btn submitBtn">Изменить</button>
        </form>
      </div>
    </div>
    <!-- editProduct-end -->
  </section>
  <!-- admin-end -->
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isActive: false,
    }
  },
}
</script>

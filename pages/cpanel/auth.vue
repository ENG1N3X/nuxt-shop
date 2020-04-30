<template>
  <!-- auth-start -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Админ-панель</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-6">
        <form class="form-row justify-content-between">
          <div class="form-group col-12">
            <label for="login">Логин</label>
            <input type="text" class="form-control" id="login" />
          </div>
          <div class="form-group col-12">
            <label for="password">Пароль</label>
            <input type="password" class="form-control" id="password" />
          </div>
          <div class="form-group col-3">
            <nuxt-link type="submit" to="/cpanel/products" class="btn btn-white-blue">Вход</nuxt-link>
          </div>
          <div class="form-group col-3 text-right">
            <nuxt-link to="/" class="btn btn-white-blue">Выход</nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- auth-end -->
</template>

<script>
export default {
  layout: 'cpanel/auth',
}
</script>

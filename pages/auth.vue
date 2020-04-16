<template>
  <div>
    <!-- auth-start -->
    <section class="container">
      <div class="row mb-30">
        <div class="col-12">
          <h2 class="mainTitle">Админ-панель</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6">
          <form class="login">
            <!-- required ! -->
            <div class="form-group">
              <label for="login">Логин</label>
              <input type="text" class="form-control" id="login" />
            </div>
            <div class="form-group">
              <label for="password">Пароль</label>
              <input type="password" class="form-control" id="password" />
            </div>
            <!-- <button type="submit" class="btn loginBtn">Вход</button> -->
            <nuxt-link type="submit" to="/admin" class="btn loginBtn">Вход</nuxt-link>
          </form>
        </div>
      </div>
    </section>
    <!-- auth-end -->
  </div>
</template>

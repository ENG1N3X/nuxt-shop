<template>
  <!-- error layout -->
  <div>
    <section class="container">
      <div class="row">
        <div class="col-12">
          <h1 v-if="error.statusCode === 404" class="mainTitle">Страница не найдена.</h1>
          <h1 v-else class="mainTitle">Произошла ошибка.</h1>
        </div>
      </div>
    </section>
  </div>
  <!-- error layout -->
</template>

<script>
export default {
  props: ['error'],
}
</script>

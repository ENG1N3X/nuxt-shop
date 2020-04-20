<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" class="mainTitle">Страница не найдена.</h1>
    <h1 v-else class="mainTitle">Произошла ошибка.</h1>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

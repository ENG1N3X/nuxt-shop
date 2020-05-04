<template>
  <div>
    <footer class="container mt-80">
      <div class="row">
        <div class="col-12">
          <span class="d-block text-center">{{ copyright }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyright: '© 2020',
    }
  },
}
</script>

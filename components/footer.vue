<template>
  <div>
    <!-- footer -->
    <footer class="container mt-80">
      <div class="row">
        <div class="col-12">
          <span class="d-block text-center">{{ copyrightText }}</span>
        </div>
      </div>
    </footer>
    <!-- //footer -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyrightText: '© 2020',
    }
  },
}
</script>

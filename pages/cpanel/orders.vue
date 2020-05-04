<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <app-order />
      </div>
    </div>
    <notifications group="success" class="success-notify" />
    <notifications group="error" class="error-notify" />
  </section>
</template>

<script>
import AppOrder from '~/components/cpanel/order/order'

export default {
  layout: 'cpanel/cpanel',
  components: {
    AppOrder,
  },
}
</script>

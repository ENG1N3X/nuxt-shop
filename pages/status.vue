<template>
  <!-- status -->
  <section v-if="(urlParams.result == 'success')" class="container">
    <div class="row">
      <div class="col-12">
        <h2 class="mainTitle text-center color-883">Оплата прошла успешно.</h2>
        <h4 class="text-center mt-30 color-545">Номер вашего заказа #{{ urlParams.order }}</h4>
        <h4 class="text-center mt-30">Для более точной информации проверьте вашу почту.</h4>
      </div>
    </div>
  </section>
  <section v-else class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="text-center color-545">Либо вы не совершали оплату, либо оплата не прошла.</h4>
      </div>
    </div>
  </section>
  <!-- //status -->
</template>

<script>
export default {
  data() {
    return {
      urlParams: {
        result: null,
        order: null,
      },
    }
  },
  mounted() {
    this.editOrder()
  },
  methods: {
    getUrlParams() {
      const url = window.location.search
      let arrayVar = []
      let valueAndKey = []
      let resultArray = []
      arrayVar = url.substr(1).split('&')
      if (arrayVar[0] == '') return false
      for (let i = 0; i < arrayVar.length; i++) {
        valueAndKey = arrayVar[i].split('=')
        resultArray[valueAndKey[0]] = valueAndKey[1]
      }
      return resultArray
    },
    async editOrder() {
      this.urlParams = this.getUrlParams()
      if (this.urlParams.result) {
        const fd = new FormData()
        fd.append('order', this.urlParams.order)
        fd.append('status', 'Оплачен')
        await this.$store.dispatch('cpanel/orders/updateOrder', fd)
      }
    },
  },
}
</script>

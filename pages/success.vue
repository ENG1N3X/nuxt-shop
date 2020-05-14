<template>
  <!-- success -->
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
  <!-- //success -->
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
      var arrayVar = [] // массив для хранения переменных
      var valueAndKey = [] // массив для временного хранения значения и имени переменной
      var resultArray = [] // массив для хранения переменных
      arrayVar = url.substr(1).split('&') // разбираем урл на параметры
      if (arrayVar[0] == '') return false // если нет переменных в урле
      for (let i = 0; i < arrayVar.length; i++) {
        // перебираем все переменные из урла
        valueAndKey = arrayVar[i].split('=') // пишем в массив имя переменной и ее значение
        resultArray[valueAndKey[0]] = valueAndKey[1] // пишем в итоговый массив имя переменной и ее значение
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

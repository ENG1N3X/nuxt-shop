<template>
  <!-- basket -->
  <section class="container">
    <div class="row mb-30">
      <div class="col-12">
        <h2 class="mainTitle">Корзина</h2>
      </div>
    </div>
    <div v-if="basketComputed != 0" class="row mb-30">
      <div class="col-8">
        <h3 class="d-flex">
          Итого:
          <div class="pl-10 color-545">{{ sumProductPrice }} рублей</div>
        </h3>
      </div>
      <div class="col-2">
        <button class="btn btn-yellow-white w-100" @click="clearBasket">Очистить</button>
      </div>
      <div class="col-2">
        <button class="btn btn-green-white w-100" @click="makeOffer">Оплатить</button>
      </div>
      <div class="col-12 mt-30">
        <div class="row mb-30 pt-2 pb-2 bg-6f6 rounded mb-20" v-for="(product, idx) in basketComputed" :key="idx">
          <div class="col-6">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-6">
                <p class="productPrice">
                  Цена:<br />
                  {{ product.price }}
                </p>
              </div>
              <div class="col-6">
                <p class="productCount">
                  Количество:<br />
                  {{ product.count }}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <h2 class="productTitle">{{ product.title }}</h2>
              </div>
              <div class="col-12">
                <p class="productDesc">
                  {{ product.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-12">
        <h4 class="mb-0 color-545">В коризне пусто</h4>
      </div>
    </div>
    <notifications group="success" class="success-notify" />
  </section>
  <!-- //basket -->
</template>

<script>
// const CloudIpsp = require('cloudipsp-node-js-sdk') // api fondy
const QiwiBillPaymentsAPI = require('@qiwi/bill-payments-node-js-sdk')

export default {
  computed: {
    // Получаем продукты из store/basket.js
    basketComputed() {
      return this.$store.getters['basket/basketProducts']
    },
    sumProductPrice() {
      // Подсчитываем общую цену за все продукты
      let productPrice = 0
      this.basketComputed.forEach((product) => {
        productPrice += parseInt(product.price)
      })
      return productPrice
    },
  },
  methods: {
    // Метод очистки store/basket.js от продуктов
    clearBasket() {
      this.$store.commit('basket/clear')
      this.$notify({
        group: 'success',
        text: 'Корзина очищена',
      })
    },
    // Тестовая оплата
    async makeOffer() {
      try {
        const SECRET_KEY =
          'eyJ2ZXJzaW9uIjoiUDJQIiwiZGF0YSI6eyJwYXlpbl9tZXJjaGFudF9zaXRlX3VpZCI6ImpiZWxvOS0wMCIsInVzZXJfaWQiOiI3OTI5MTAxMTAwNiIsInNlY3JldCI6IjdjY2Q5MGI4ZGE3MzJlOWQ0ZjkzMTIzMDhjYzA5MThhMjEyZDgxNTQ4NjY3ZTBjODA3NDc2MWMwODA4YzYzZTUifX0='
        const PUBLIC_KEY =
          '48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iPsXSTd264BRMku72Y6NtHy63xeZwo7oXR2nd6JSaQDe92XsJJF5kBU3g4ZnEW47X5Po9gRmRCcwrYTFtLPyP97jicAZ6jRtX8DAUBT9Mnp'

        const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY)
        const billId = qiwiApi.generateId()
        const amount = 1
        const successUrl = 'http://test.ru/'

        const fields = {
          amount,
          currency: 'RUB',
          expirationDateTime: qiwiApi.getLifetimeByDay(0.5),
          providerName: 'Test',
          comment: 'test',
          phone: '79999999999',
          email: 'test@test.ru',
          account: 'user uid on your side',
          customFields: {
            city: 'Москва',
            street: 'Арбат',
          },
          successUrl,
        }
        console.log('fields', fields)

        const createBillShow = await qiwiApi.createBill(billId, fields) // выставление счета
        console.log('createBillShow', createBillShow)

        let createPaymentFormShow = qiwiApi.createPaymentForm({
          PUBLIC_KEY,
          amount,
          billId,
          successUrl,
        }) // создание формы оплаты
        console.log('createPaymentFormShow', createPaymentFormShow)
      } catch (error) {
        console.error('error', error)
      }

      // const params = {
      //   PUBLIC_KEY,
      //   amount: 200,
      //   billId: '893794793973',
      //   successUrl: 'https://merchant.com/payment/success?billId=893794793973',
      // }

      // const qiwiApi = new QiwiBillPaymentsAPI(SECRET_KEY)
      // console.log(qiwiApi)
      // const link = qiwiApi.createPaymentForm(params)
      // console.log(link)
      //
      // https://docs.fondy.eu/en/docs/page/2/
      // const fondy = new CloudIpsp({
      //   merchantId: 1446024,
      //   secretKey: 'test',
      //   contentType: 'json',
      // })
      // const requestData = {
      //   order_id: 'ID1234',
      //   order_desc: 'test order',
      //   currency: 'USD',
      //   amount: '1000',
      // }
      // fondy
      //   .Checkout(requestData)
      //   .then((data) => {
      //     console.log('data', data)
      //   })
      //   .catch((error) => {
      //     console.log('error', error)
      //   })
    },
  },
}
</script>

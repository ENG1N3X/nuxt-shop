<template lang="pug">
  //- choice-start
  section.container.mb-40
    .row.mb-10
      .col-12
        h2.mainTitle Товары
    .row.justify-content-center
      - for(let i = 0; i < 6; i++)
        .col-4.mb-40
          <nuxt-link to="/product" class="choice">
            img(src="~assets/img/products/product1.png", alt="product").img-fluid.choiceImg
            h4.choiceTitle Мой продукт
            a.choiceBtn Подробнее
          </nuxt-link>
  //- choice-end
</template>

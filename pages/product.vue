<template lang="pug">
    //- product-start
    .container.mb-40
        .row
            .col-12.mb-10
                h1.mainTitle Товар #1
        .row.align-items-center
            .col-6
                img(src="~assets/img/products/product1.png" alt="product").img-fluid
            .col-6
                .row
                    .col-6.text-center
                        p.productPrice 500 рублей
                    .col-6.text-center
                        p.productCount 500 штук
                .row
                    .col-12
                        p.productDesc Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum, quo itaque esse corporis, incidunt laborum laboriosam porro expedita facere est iste et error nostrum consequuntur ex explicabo tempore sint.
                .row
                    .col-4
                        app-smallBtn
    //- product-end
</template>

<script>
import AppSmallBtn from "~/components/button/SmallBtn.vue";

export default {
  components: {
    AppSmallBtn
  }
};
</script>

<template lang="pug">
  div
    //- header-start
    header.container.mb-80
      .row.align-items-center
        .col-3
          header-logo
        .col-6
          header-nav
        .col-3.text-right
          a.headerPhone(href='tel:88005553535') 8-800-555-35-35
    //- header-end

    //- nuxt-start
    nuxt
    //- nuxt-end

    //- footer-start
    footer.container
      .row
        .col-12
          span.color-000.d-block.text-center © 2020
    //- footer-end
</template>

<script>
import HeaderLogo from "~/components/header/Logo.vue";
import HeaderNav from "~/components/header/Nav.vue";

export default {
  components: {
    HeaderLogo,
    HeaderNav
  }
};
</script>

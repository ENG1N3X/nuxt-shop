<template lang="pug">
    button.btn.SmallBtn Купить
</template>

<style lang="sass">
@import ~assets/sass/vars
@import ~assets/sass/mixins/font-size

.SmallBtn
    padding: 8px 0
    color: $color-883 !important
    font-size: rem(15)
    border: 1px solid $color-883
    border-radius: 10px
    width: 100%
    transition: .2s

    &:hover
       color: $color-fff !important
       border-color: $color-000
       background: $color-000
</style>

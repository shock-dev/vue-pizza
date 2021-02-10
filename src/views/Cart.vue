<template>
  <app-cart
    v-if="productsLength"
  />
  <app-cart-empty
    v-else
  />
</template>

<script>
import AppCart from '@/components/Cart'
import AppCartEmpty from '@/components/CartEmpty'
import { mapGetters } from 'vuex'

export default {
  name: "Cart",
  components: {
    AppCartEmpty,
    AppCart
  },
  computed: {
    ...mapGetters('cart', ['productsLength'])
  }
}
</script>

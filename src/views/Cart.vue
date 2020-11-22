<template>
  <app-cart
    v-if="false"
  />
  <app-cart-empty
    v-else
  />
</template>

<script>
import AppCart from "@/components/Cart";
import AppCartEmpty from "@/components/CartEmpty";
export default {
name: "Cart",
  components: {AppCartEmpty, AppCart}
}
</script>

<style scoped>

</style>

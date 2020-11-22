<template>
  <app-cart
    v-if="false"
  />
  <app-cart-empty
    v-else
  />
</template>

<script>
import AppCart from "@/components/AppCart";
import AppCartEmpty from "@/components/AppCartEmpty";
export default {
name: "Cart",
  components: {AppCartEmpty, AppCart}
}
</script>

<style scoped>

</style>

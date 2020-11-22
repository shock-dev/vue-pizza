<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <img width="38" src="../assets/img/pizza-logo.svg" alt="Pizza logo" />
        <div>
          <h1>Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
      <div class="header__cart">
        <Button/>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
export default {
name: "AppHeader",
  components: {Button}
}
</script>

<style scoped>

</style>

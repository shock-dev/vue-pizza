<template>
  <div class="cart cart--empty">
    <h2>Корзина пустая 😕</h2>
    <p>
      Вероятней всего, вы не заказывали ещё пиццу.<br />
      Для того, чтобы заказать пиццу, перейди на главную страницу.
    </p>
    <img src="../assets/img/empty-cart.png" alt="Empty cart" />
    <router-link class="button button--black" :to="{ name: 'Home' }">
      <span>Вернуться назад</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EmptyCart'
}
</script>

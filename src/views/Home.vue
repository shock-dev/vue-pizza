<template>
    <div class="content">
      <div class="container">
        <div class="content__top">
         <categories/>
         <sort-popup/>
        </div>
        <h2 class="content__title">Все пиццы</h2>
        <products-list/>
      </div>
    </div>
</template>

<script>
import Categories from "@/components/Categories";
import SortPopup from "@/components/SortPopup";
import ProductsList from "@/components/ProductsList";

export default {
  name: "Home",
  components: {ProductsList, SortPopup, Categories},
}
</script>

<style scoped>

</style>

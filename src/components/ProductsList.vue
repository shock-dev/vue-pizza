<template>
  <div class="content__items">
    <product
        v-for="item in products"
        :key="item.id"
        :title="item.name"
        :img="item.imageUrl"
        :activeTypes="item.types"
        :activeSizes="item.sizes"
        :price="item.price"
        :category="item.category"
        :rating="item.rating"
    />
  </div>
</template>

<script>
import Product from "@/components/Product";

export default {
  name: "ProductsList",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  components: {Product}
}
</script>

<style scoped>

</style>

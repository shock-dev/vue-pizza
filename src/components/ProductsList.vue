<template>
  <div class="content__items">
    <product
        v-for="item in products"
        :key="item.id"
        :title="item.name"
        :img="item.imageUrl"
        :types="item.types"
        :sizes="item.types"
        :price="item.price"
        :category="item.category"
        :rating="item.rating"
    />
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Product from "@/components/Product";

export default {
  name: "ProductsList",
  components: {Product},
  mounted() {
    this.$store.dispatch('products/getItems')
  },
  computed: {
    ...mapGetters('products', {
      products: 'items'
    })
  }
}
</script>

<style scoped>

</style>

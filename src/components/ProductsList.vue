<template>
  <div class="content__items">
    <product
        v-for="item in getProductsByCategory"
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
import Product from "@/components/Product"
import { mapGetters } from 'vuex'

export default {
  name: "ProductsList",
  props: {
    products: {
      type: Array,
      default: () => []
    }
  },
  components: { Product },
  computed: {
    ...mapGetters('categories', ['active']),
    getProductsByCategory() {
      if (this.active !== null) {
        return this.products.filter(item => item.category === this.active)
      }

      return this.products
    }
  }
}
</script>

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
  components: {
    Product
  },
  computed: {
    ...mapGetters('categories', {
      categoryActive: 'active'
    }),
    ...mapGetters('sort', ['getActiveFilter']),
    getProductsByCategory() {
      // Filter by Category
      let filteredProducts = [...this.products]

      if (this.categoryActive !== null) {
        filteredProducts = filteredProducts.filter(item => item.category === this.categoryActive)
      }

      // Sorting by price
      if (this.getActiveFilter === 'цене') {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price)
      }

      // Sorting by popular
      if (this.getActiveFilter === 'популярности') {
        filteredProducts = filteredProducts.sort((a, b) => b.rating - a.rating)
      }

      // Sorting by alphabet
      if (this.getActiveFilter === 'алфавиту') {
        filteredProducts = filteredProducts.sort(function(a, b){
          if(a.name < b.name) { return -1; }
          if(a.name > b.name) { return 1; }
          return 0;
        })
      }

      return filteredProducts
    }
  }
}
</script>

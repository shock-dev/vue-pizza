<template>
  <div class="container">
    <div class="content__top">
      <Categories
        :items="categories"
        :active="category"
        @clickCategory="setCategory"
      />
      <Sort
        :items="sorts"
        :currentSort="sortBy"
        @clickSort="setSortBy"
      />
    </div>
    <h2 class="content__title">Все пиццы</h2>
    <div class="content__items">
      <PizzaBlock
        v-for="(item) in pizzas"
        :key="item.id"
        :name="item.name"
        :price="item.price"
        :imageUrl="item.imageUrl"
        :category="item.category"
        :rating="item.rating"
        :types="item.types"
        :sizes="item.sizes"
      />
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

// Components
import Categories from '@/components/Categories'
import Sort from '@/components/Sort'

// Resources
import categories from '@/resources/categories'
import sorts from '@/resources/sorts'
import PizzaBlock from '@/components/PizzaBlock'

export default {
  name: 'Home',
  components: {
    Categories,
    Sort,
    PizzaBlock
  },
  data: () => ({
    categories,
    sorts
  }),
  mounted() {
    this.fetchPizzas()
  },
  computed: {
    ...mapGetters('filters', [
      'category',
      'sortBy'
    ]),
    ...mapGetters('pizza', [
      'pizzas'
    ])
  },
  methods: {
    ...mapMutations('filters', [
      'setCategory',
      'setSortBy'
    ]),
    ...mapActions('pizza', [
      'fetchPizzas'
    ])
  }
}
</script>

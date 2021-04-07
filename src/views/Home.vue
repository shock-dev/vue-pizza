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
    <div v-if="loading" class="content__items">
      <PizzaLoader
        v-for="c in 8"
        :key="c"
      />
    </div>
    <div v-else class="content__items">
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
import { mapGetters, mapMutations } from 'vuex'

// Components
import Categories from '@/components/Categories'
import Sort from '@/components/Sort'
import PizzaBlock from '@/components/PizzaBlock'
import PizzaLoader from '@/components/PizzaLoader'

// Resources
import categories from '@/resources/categories'
import sorts from '@/resources/sorts'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Vue pizza',
    titleTemplate: '%s - самая вкусная пицца во вселенной!',
    htmlAttrs: { lang: 'ru' }
  },
  components: {
    PizzaLoader,
    Categories,
    Sort,
    PizzaBlock
  },
  data: () => ({
    categories,
    sorts
  }),
  computed: {
    ...mapGetters('filters', [
      'category',
      'sortBy'
    ]),
    ...mapGetters('pizza', [
      'pizzas',
      'loading'
    ])
  },
  methods: {
    ...mapMutations('filters', [
      'setCategory',
      'setSortBy'
    ])
  }
}
</script>

<template>
  <div class="categories">
    <ul>
      <li :class="{active: active === null}" @click="selectItem(null)">Все</li>
      <li v-for="(item, index) in categories"
          :key="item + '_' + index"
          @click="selectItem(index)"
          :class="{active: active === index}"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "Categories",
  computed: {
    ...mapGetters('categories', {
      categories: 'items',
      active: 'getActiveCategory'
    })
  },
  methods: {
    ...mapMutations('categories', ['selectItem'])
  }

}
</script>

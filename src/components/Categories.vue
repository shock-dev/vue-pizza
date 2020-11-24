<template>
  <div class="categories">
    <ul>
      <li :class="{active: active === null}" @click="selectDefItem">Все</li>
      <li v-for="(item, index) in categories"
          :key="item + '_' + index"
          @click="selectItem(index)"
          :class="{active: active === index}"
      >{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Categories",
  computed: {
    ...mapGetters('categories', {
      categories: 'items',
      active: 'active'
    })
  },
  methods: {
    selectItem(id) {
      this.$store.dispatch('categories/getProducts', id)
    },
    selectDefItem() {
      this.$store.commit('categories/selectItem', null)
    }
  }

}
</script>

<style scoped>

</style>

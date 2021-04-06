<template>
  <div class="categories">
    <ul>
      <li
        :class="{ active: active === null }"
        @click="clickCategoryHandler(null)"
      >
        Все
      </li>
      <li
        v-for="(name, index) in items"
        :key="name"
        :class="{ active: active === index }"
        @click="clickCategoryHandler(index)"
      >
        {{ name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: {
    items: { type: Array, required: true },
    active: { required: true }
  },
  methods: {
    clickCategoryHandler(val) {
      if (val !== this.active) {
        this.$emit('clickCategory', val)
      }
    }
  }
}
</script>

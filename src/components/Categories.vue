<template>
  <div class="categories">
    <ul>
      <li :class="{ active: active === null }">Все</li>
      <li
        v-for="(name, index) in items"
        :key="name"
        :class="{ active: active === index }"
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
    active: { type: Number, required: true }
  }
}
</script>

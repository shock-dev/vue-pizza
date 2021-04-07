<template>
  <div class="pizza-block">
    <img
      class="pizza-block__image"
      :src="imageUrl"
      :alt="name"
    />
    <h4 class="pizza-block__title">{{ name }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li
          v-for="(name, index) in allTypes"
          :key="index"
          :class="{ active: activeType === index, disabled: !types.includes(index) }"
          @click="activeType = index"
        >
          {{ name }}
        </li>
      </ul>
      <ul>
        <li
          v-for="(size, index) in allSizes"
          :key="index"
          :class="{ active: activeSize === size, disabled: !sizes.includes(size) }"
          @click="activeSize = size"
        >
          {{ size }} см.
        </li>
      </ul>
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ price }} ₽</div>
      <div class="button button--outline button--add" @click="clickBtnHandler">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
            fill="white"
          />
        </svg>
        <span>Добавить</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PizzaBlock',
  props: {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: Number, required: true },
    rating: { type: Number, required: true },
    types: { type: Array, required: true },
    sizes: { type: Array, required: true }
  },
  data() {
    return {
      allTypes: ['тонкое', 'традиционное'],
      activeType: this.types[0],
      allSizes: [26, 30, 40],
      activeSize: this.sizes[0]
    }
  },
  methods: {
    clickBtnHandler() {
      const pizza = {
        name: this.name,
        imageUrl: this.imageUrl,
        price: this.price,
        size: this.activeSize,
        type: this.allTypes[this.activeType]
      }
      this.$emit('plusPizza', pizza)
    }
  }
}
</script>

<template>
  <div class="pizza-block">
    <img
        class="pizza-block__image"
        :src="img"
        alt="Pizza"
    />
    <h4 class="pizza-block__title">{{ title }}</h4>
    <div class="pizza-block__selector">
      <ul>
        <li v-for="(item, index) in types"
            :key="index"
            :class="{active: active === index, disabled: !activeTypes.includes(index)}"
            @click="selectActiveType(index)"
        >{{ item }}</li>
      </ul>
      <ul>
        <li v-for="(size, index) in sizes"
            :key="index"
            :class="{active: activeSize === size, disabled: !activeSizes.includes(size)}"
            @click="selectActiveSize(size)"
        >{{ size }} см.</li>
      </ul>
    </div>
    <div class="pizza-block__bottom">
      <div class="pizza-block__price">от {{ price }} ₽</div>
      <div class="button button--outline button--add">
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
        <i>2</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: [
    'title',
    'img',
    'price',
    'rating',
    'activeTypes',
    'activeSizes',
    'category'
  ],
  data() {
    return {
      active: this.activeTypes[0],
      activeSize: this.activeSizes[0],
      types: ['тонкое', 'традиционное'],
      sizes: [26, 30, 40]
    }
  },
  methods: {
    selectActiveType(id) {
      this.active = id
    },
    selectActiveSize(size) {
      this.activeSize = size
    }
  }
}
</script>

<style>
.disabled {
  opacity: .5;
  pointer-events: none;
}
</style>

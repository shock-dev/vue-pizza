<template>
  <div class="sort">
    <div class="sort__label">
      <svg
          :class="{rotated: visible}"
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span @click="visible = !visible">{{ sortItems[sortActive] }}</span>
    </div>
    <div class="sort__popup" v-show="visible">
      <ul>
        <li v-for="(item, index) in sortItems"
            :key="item + ' - ' + index"
            :class="{active: sortActive === index}"
            @click="changeSort(index)"
        >{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "SortPopup",
  data() {
    return {
      visible: false
    }
  },
  created() {
    const onClickOutside = e => this.visible = this.$el.contains(e.target) && this.visible;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },
  computed: {
    ...mapGetters('sort', {
      sortItems: 'items',
      sortActive: 'active'
    })
  },
  methods: {
    changeSort(id) {
      this.$store.commit('sort/changeSort', id)

      this.visible = false
    }
  }
}
</script>

<style>
  .rotated {
    transform: rotate(180deg);
  }
</style>

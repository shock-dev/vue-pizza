<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header },
  mounted() {
    const { category, sortBy } = this
    this.fetchPizzas({ category, sortBy })
  },
  methods: {
    ...mapActions('pizza', [
      'fetchPizzas'
    ])
  },
  computed: {
    ...mapGetters('filters', [
      'category',
      'sortBy'
    ])
  },
  watch: {
    category() {
      const { category, sortBy } = this
      this.fetchPizzas({ category, sortBy })
    },
    sortBy() {
      const { category, sortBy } = this
      this.fetchPizzas({ category, sortBy })
    }
  }
}
</script>

<style src="./assets/scss/app.scss" lang="scss" />

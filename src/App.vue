<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header },
  mounted() {
    this.fetchPizzas()
  },
  methods: {
    ...mapActions('pizza', [
      'fetchPizzas'
    ])
  }
}
</script>

<style src="./assets/scss/app.scss" lang="scss" />

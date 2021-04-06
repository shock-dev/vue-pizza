<template>
  <div class="wrapper">
    <Header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'App',
  components: { Header }
}
</script>

<style src="./assets/scss/app.scss" lang="scss" />

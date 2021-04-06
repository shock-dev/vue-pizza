<template>
  <div class="pizza-block">
    <content-loader
      :width="280"
      :height="450"
      :speed="2"
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="383" y="0" rx="5" ry="5" width="43" height="30" />
      <circle cx="140" cy="140" r="140" />
      <rect x="0" y="293" rx="0" ry="0" width="276" height="26" />
      <rect x="0" y="338" rx="0" ry="0" width="276" height="59" />
      <rect x="0" y="412" rx="0" ry="0" width="89" height="49" />
      <rect x="109" y="412" rx="0" ry="0" width="168" height="40" />
    </content-loader>
  </div>
</template>

<script>
import { ContentLoader } from 'vue-content-loader'

export default {
  name: 'PizzaLoader',
  components: { ContentLoader }
}
</script>

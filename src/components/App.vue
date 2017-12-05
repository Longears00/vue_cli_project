<template lang="html">
  <div class="app">
      <h1>{{ title }}</h1>
      <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from '@/components/content';

export default {
  components: {
    'ninjas': Ninjas
  },
  data() {
    return {
      title: "app vue"
    }
  }
}
</script>

<style lang="css">
</style>

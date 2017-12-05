<template lang="html">
  <ul>
      <li v-for='ninja in ninjas'>{{ ninja }}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ['yoshi', 'mario', 'ryu']
    }
  }
}
</script>

<style lang="css">
</style>

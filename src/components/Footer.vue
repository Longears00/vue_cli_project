<template lang="html">
<footer>
    <p>{{ title }}</p>
    <p>{{ copyright }}</p>
</footer>
</template>

<script>
import {
  bus
} from '@/main';

export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "copyright 2017 app vue"
    }
  },
  created() {
    bus.$on('titleChanged', (data) => {
      this.title = data;
    });
  }
}
</script>

<style lang="css" scoped>
footer{
background: #222;
}
p{
    color:lightgreen;
    text-align: center;
}
</style>

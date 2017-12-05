<template lang="html">
<header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
</header>
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

    }
  },
  methods: {
    changeTitle: function() {
      // this.title = "bus vue title change";
      // bus.$emit('titleChanged', 'bus vue title change');
      this.$emit('changeTitle', 'title params');
    }
  }
}
</script>

<style lang="css" scoped>
header{
background: lightgreen;
}
h1{
    color:#222;
    text-align: center;
}
</style>

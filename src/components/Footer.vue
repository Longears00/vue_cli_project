<template lang="html">
<footer>
    <p>{{ copyright }}</p>
</footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: "copyright 2017 app vue"
    }
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

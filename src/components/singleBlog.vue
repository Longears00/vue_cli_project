<template lang="html">
<div class="" id="single-blog">
<h1>{{ blog.title }}</h1>
<article class="">
{{ blog.body }}
</article>
</div>
</template>

<script>
export default {
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data) {
      console.log(data);
      this.blog = data.body;
    });
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: {

      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>

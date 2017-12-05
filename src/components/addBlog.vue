<template lang="html">
<div class="" id="add-blog">
<h2>add a new blog post</h2>
<form class="" >
    <label for="title">Blog Title</label>
    <input type="text" name="" value="" required v-model.lazy="blog.title">
    <label for="content">Blog content</label>
    <textarea name="content" rows="8" cols="80" v-model.lazy="blog.content"></textarea>
</form>
<div class="" id="preview">
<h3>preview Blog</h3>
<p>{{ blog.title }}</p>
<p>{{ blog.content }}</p>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
</style>

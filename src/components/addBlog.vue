<template lang="html">
<div class="" id="add-blog">
<h2>add a new blog post</h2>
<form class="" >
    <label for="title">Blog Title</label>
    <input type="text" name="" value="" required v-model.lazy="blog.title">
    <label for="content">Blog content</label>
    <textarea name="content" rows="8" cols="80" v-model.lazy="blog.content"></textarea>
    <div class="" id="checkboxes">
        <label for="ninja">Ninjas</label>
        <input type="checkbox" name="ninja" value="ninja"  v-model="blog.categories">
        <label for="ninja2">Ninjas2</label>
        <input type="checkbox" name="ninja2" value="ninja2"  v-model="blog.categories">
        <label for="ninja3">Ninjas3</label>
        <input type="checkbox" name="ninja3" value="ninja3"  v-model="blog.categories">
        <label for="ninja4">Ninjas4</label>
        <input type="checkbox" name="ninja4" value="ninja4"  v-model="blog.categories">
    </div>
    <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{ author }}</option>
            </select>
</form>
<div class="" id="preview">
<h3>preview Blog</h3>
<p>{{ blog.title }}</p>
<p>{{ blog.content }}</p>
<ul>
    <li v-for="cat in blog.categories">{{ cat }}</li>
</ul>
   <p>Author: {{ blog.author }}</p>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      authors: [
        'ninja',
        'vue vindicator',
        'augular'
      ],
      blog: {
        title: '',
        content: '',
        categories: [],
        author: ''
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
#checkboxes input{
    display:inline-block;
    margin-right:10px;
}
#checkboxes label{
    display:inline-block;
}
</style>

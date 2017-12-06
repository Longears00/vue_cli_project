<template lang="html">
  <div class="" id="show-blogs" v-theme="theme">
      <label>theme:</label>
              <select v-model="theme">
                  <option v-for="sing in themes">{{ sing }}</option>
              </select>
      <h1>all blog articles</h1>
      <div class="single-blog" v-for="blog in blogs">
          <h3 v-rainbow>{{ blog.title }}</h3>
          <p>{{ blog.body }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: 'spring',
      themes: [
        'spring', 'summer', 'automn', 'winter'
      ],
      blogs: [],
    }
  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/posts').then((data) => {
      this.blogs = data.body.slice(0, 10);
    })
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>

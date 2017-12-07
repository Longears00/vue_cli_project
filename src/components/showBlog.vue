<template lang="html">
  <div class="" id="show-blogs" v-theme:column="theme">
      <label>theme:</label>
              <select v-model="theme">
                  <option v-for="sing in themes">{{ sing }}</option>
              </select>
      <h1>all blog articles</h1>
      <input type="text" v-model="search" placeholder="search blog" name="" value="">
      <div class="single-blog" v-for="blog in filteredBlogs">
          <router-link v-bind:to="'/blog/'+blog.id"><h3 v-rainbow>{{ blog.title | to-uppercase }}</h3></router-link>
          <p>{{ blog.body }}</p>
      </div>
  </div>
</template>

<script>
import searchMixin from '@/mixins/searchMixin';

export default {
  data() {
    return {
      search: '',
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
  // computed: {
  //   filteredBlogs: function() {
  //     let _this = this;
  //     return this.blogs.filter((blog) => {
  //       return blog.title.match(_this.search);
  //     })
  //   }
  // },
  //register filter locally
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  mixins: [searchMixin],
  //register directives locally
  directives: {
    'randomColor': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  },
  methods: {

  },
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

<template lang="html">
  <div class="" id="show-blogs" v-theme:column="theme">
      <label>theme:</label>
              <select v-model="theme">
                  <option v-for="sing in themes">{{ sing }}</option>
              </select>
      <h1>list blog title articles</h1>
      <input type="text" v-model="search" placeholder="search blog" name="" value="">
      <div class="single-blog" v-for="blog in filteredBlogs">
          <router-link v-bind:to="'/blog/'+blog.id"><h3 v-rainbow>{{ blog.title | to-uppercase }}</h3></router-link>
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
  computed: {

  },
  //register filter locally
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    }
  },
  //register directives locally
  directives: {
    'randomColor': {
      bind(el, binding, vnode) {
        el.style.color = '#' + Math.random().toString().slice(2, 8);
      }
    }
  },
  mixins: [searchMixin],
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

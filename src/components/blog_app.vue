<template lang="html">
<div class="">
    <!-- <add-blog></add-blog> -->
    <list-blog></list-blog>
    <show-blog></show-blog>
</div>
</template>

<script>
import addBlog from '@/components/addBlog'
import showBlog from '@/components/showBlog'
import listBlog from '@/components/listBlogs'



export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css">
</style>

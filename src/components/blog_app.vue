<template lang="html">
<div class="">
    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
</div>
</template>

<script>
import addBlog from '@/components/addBlog'
import showBlog from '@/components/showBlog'

export default {
  components: {
    'add-blog': addBlog,
    'show-blog': showBlog
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

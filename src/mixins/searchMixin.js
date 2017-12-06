
export default{
    computed: {
      filteredBlogs: function () {
        let _this = this;
        return this.blogs.filter(function (blog) {
          return blog.title.match(_this.search);
        });
      },
    },
  };

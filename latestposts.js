const app = Vue.createApp({
  data() {
    return {
      message: "Hello Vue!",
      posts: [],
      count: 0,
    };
  },
  mounted() {
    this.fetchPosts();

  },

  methods: {
    fetchPosts: function () {
      var url = "/wordpress/wp-json/wp/v2/posts?filter[orderby]=date";
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.posts = data;
        });
    },
  },
  template: `<div><h1>My Latest Posts</h1>
  <button @click="count++">{{count}}</button>
  <div>
    <p v-for="post in posts">
      <a v-bind:href="post.link">{{post.title.rendered}}</a>
    </p>
  </div>
</div>`,
});

app.mount("#app");

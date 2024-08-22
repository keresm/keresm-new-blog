<template>
  <div>
    <h1>Blog Posts</h1>
    <div v-for="post in posts" :key="post.id" class="post">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
    </div>
    <PostForm @new-post="addPost" />
  </div>
</template>

<script>
import PostForm from './PostForm.vue';

export default {
  name: 'BlogComponent', // Обновленное имя компонента
  components: {
    PostForm
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    addPost(post) {
      this.posts.push(post);
      this.savePosts();
    },
    loadPosts() {
      const posts = JSON.parse(localStorage.getItem('posts')) || [];
      this.posts = posts;
    },
    savePosts() {
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }
  },
  created() {
    this.loadPosts();
  }
};
</script>

<style scoped>
.post {
  border-bottom: 1px solid #ccc;
  padding: 1em 0;
}

h1 {
  font-size: 2em;
  color: #333;
}

h2 {
  font-size: 1.5em;
  color: #555;
}

p {
  font-size: 1em;
  color: #666;
}
</style>

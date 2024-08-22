<template>
    <div>
      <h2>Create a New Post</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Title:</label>
          <input v-model="title" id="title" required />
        </div>
        <div>
          <label for="content">Content:</label>
          <textarea v-model="content" id="content" required></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        content: ''
      };
    },
    methods: {
      submitForm() {
        const newPost = {
          id: Date.now(),
          title: this.title,
          content: this.content
        };
        this.$emit('new-post', newPost);
        this.title = '';
        this.content = '';
      }
    }
  };
  </script>
  
  <style scoped>
  form {
    margin: 2em 0;
  }
  
  label {
    display: block;
    margin: 0.5em 0;
  }
  
  input, textarea {
    width: 100%;
    padding: 0.5em;
    margin-bottom: 1em;
  }
  
  button {
    padding: 0.5em 1em;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  
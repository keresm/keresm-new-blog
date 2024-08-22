<template>
  <div id="app">
    <BlogComponent />
  </div>
</template>

<script>
import BlogComponent from './components/BlogComponent.vue'; // Обновленный импорт

export default {
  name: 'App',
  components: {
    BlogComponent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

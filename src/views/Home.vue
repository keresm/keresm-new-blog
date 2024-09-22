<script setup>
import store from '../store.js'
</script>

<template>
    <div class="Home">
        <main clas="container mx-auto">
            <div class="PostItem border border-slate-200 mb-4 p-4 rounded-lg" v-for="item, itemIndex in store.posts" :key="itemIndex" @click="$router.push(`/post/${item.id}`)">
                <h1 class="text-slate-900 text-3xl font-bold mb-4"> {{ item.title }}
                </h1>
                <p class="text-xl text-slate-500"> {{item.description}}</p>
            </div>
        </main>
    </div>
</template>
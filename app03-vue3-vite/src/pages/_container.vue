<template>
  <div>
    _container
  </div>
  <div>
    <p>
      <router-link to="/">Go to Home</router-link>
    </p>
    <p>
      <router-link to="/chat">Go to Chat</router-link>
    </p>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Container',
})
</script>

<style>

</style>
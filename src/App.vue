<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import request from '@/utils/request'

onMounted(() => {
  request({
    url: './user/login',
    method: 'post',
    data: {
      username: 'admin',
      password: '11111',
    },
  })
})
</script>

<style></style>

<template>
  <div>
    <el-button type="primary" size="default" :icon="Plus">Add</el-button>
    <el-button type="success" size="default" :icon="Edit">Edit</el-button>
    <el-pagination layout="prev, pager, next" :total="1000" />
  </div>
</template>

<script setup lang="ts">
import { Plus, Edit } from '@element-plus/icons-vue'
</script>

<style></style>

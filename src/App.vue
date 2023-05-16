
<template>
  <h5>请将浏览器屏幕尺寸调整为 1920 以下，MacOS default : 1512*982 </h5>
  <h5>Please adjust brower screen width below 1920 px,Mac OS default is : 1512*982 </h5>
  <h5>然后您可以查看时间选择器的</h5>
  <el-date-picker v-model="dateTime" type="datetimerange">
  </el-date-picker>
  <br/>
  <el-time-picker v-model="timer"></el-time-picker>
</template>

<script setup lang="ts" name="App">
import { ref } from 'vue';

const dateTime = ref([])
const timer = ref([])
</script>

<style scoped lang="scss"></style>
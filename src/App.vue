
<template>
  <Desc />
  <el-form label-width="150px">
    <el-form-item label="时间日期选择器："><el-date-picker v-model="dateTime" type="datetimerange">
      </el-date-picker></el-form-item>
    <br />
    <el-form-item label="时间选择器："> <el-time-picker v-model="timer"></el-time-picker></el-form-item>
  </el-form>
</template>

<script setup lang="ts" name="App">
import { ref } from 'vue';
import Desc from './components/Desc.vue'

const dateTime = ref([])
const timer = ref([])
</script>

<style scoped lang="scss"></style>
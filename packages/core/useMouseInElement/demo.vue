<script setup lang="ts">
import CompA from './compA.vue'
import { stringify } from '@vueuse/docs-utils'
import { reactive, ref } from 'vue-demi'
import { useMouseInElement } from '.'

const target = ref(null)
const mouse = reactive(useMouseInElement(target))
const text = stringify(mouse)
</script>

<template>
  <CompA ref="target" />
  <pre ref="demo" lang="yaml">{{ text }}</pre>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { Meta as MetaProps } from './components/types'
import Meta from './components/Meta.vue'

const state = reactive({ metaList: [] as MetaProps[] })

onMounted(() => {
  state.metaList = Array.from(document.querySelectorAll('head meta')).map(meta => {
    const attributes = meta.getAttributeNames()
    const props: MetaProps = {}
    for(const attribute of attributes) {
      if (attribute === 'name') {
        props.key = meta.getAttribute(attribute) ?? ''
        props.value = meta.getAttribute('content') ?? ''
      } else if (attribute === 'charset') {
        props.key = 'charset'
        props.value = meta.getAttribute('charset') ?? ''
      } else {
        continue
      }
      
    }
    return props
  })
})


</script>

<template>
  <div class="app">
    <ul>
      <li v-for="meta in state.metaList">
        <Meta :meta="meta" />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
.app 
  position: fixed
  top: 0
  right: 0
  background-color: #bbbbbb
  z-index: 2147483647
</style>

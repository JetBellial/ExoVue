<template>
    <div>
      <p>{{ tab }}</p>
      <p>{{ nbr }}</p>
      <p>{{ phrase }}</p>
      <p>{{ increment() }}</p>
    </div>
</template>

<script setup lang='js'>
import { ref } from 'vue'

const nbr = ref(1)
const phrase = ref('Thomas a faim')
const tab = ref(['foo','bar'])

const increment = () => {
  return ref(nbr.value+1)
}

</script>

<style scoped lang="css">
</style>

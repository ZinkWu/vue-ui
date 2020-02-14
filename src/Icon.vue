<template>
    <svg class="v-icon">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style scoped lang="scss">
    .v-icon{width: 1em;height: 1.2em;}
</style>

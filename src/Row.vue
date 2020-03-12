<template>
    <div class="row" :style="{marginLeft: `-${gutter/2}px`, marginRight: `-${gutter/2}px`}">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    props: {
      gutter: {
        type: [Number, String],
        default: 0
      }
    }
  }
</script>

<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>

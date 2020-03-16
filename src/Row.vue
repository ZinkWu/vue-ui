<template>
    <div class="row" :style="rowStyle">
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
    },
    computed:{
      rowStyle() {
        return {
          marginLeft: `-${this.gutter/2}px`,
          marginRight: `-${this.gutter/2}px`
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>

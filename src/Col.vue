<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
         :style="{paddingRight: `${gutter/2}px`, paddingLeft: `${gutter/2}px`}"
    >
        <div style="border: 1px solid green; height: 100px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      }
    },
    data(){
      return {
        gutter: 0
      }
    },
    mounted() {
      this.gutter = this.$parent.gutter
    }
  }
</script>

<style scoped lang="scss">
    .col{
        /*height: 100px;*/
        /*background: gray;*/
        width: 50%;
        /*border: 1px solid red;*/

        $class-prefix: col-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                width: ($n/24) * 100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24{
            &.#{$class-prefix}#{$n}{
                margin-left: ($n/24) * 100%;
            }
        }
    }
</style>

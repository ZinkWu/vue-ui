<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}">
        <svg class="icon" v-if="icon">
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    // props: ['icon', 'iconPosition']
    props: {
      icon: {
        type: String,
        default: ""
      },
      iconPosition: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped lang="scss">
    .v-button{
        font-size: var(--font-szie);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{border-color: var(--border-hover-color);}
        &:active{background: var(--button-active-bg);}
        &:focus{outline: none;}
        >.icon{width: 1em;height: 1.2em;order: 1;margin-right: .1em;margin-left: 0}
        >.content{order: 2; line-height: 1em}
        &.icon-right{
            >.icon{order: 2;margin-right: 0;margin-left: .1em}
            >.content{order: 1}
        }
    }
</style>


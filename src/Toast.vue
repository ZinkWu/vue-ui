<template>
    <div class="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <template v-if="closeButton">
            <div class="line" ref="line"></div>
            <div @click="buttonClose">
                {{closeButton.text}}
            </div>
        </template>
    </div>
</template>

<script>
  export default {
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 30
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: "关闭",
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy()
      },
      buttonClose(){
        this.close()
        if (this.closeButton && typeof this.closeButton.callback === 'function')
            this.closeButton.callback(this)
      }
    },
    mounted() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
      this.$nextTick(()=>{
        this.$refs.line.style.height = this.$el.clientHeight + 'px'
      })
    }
  }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, .7);
    .toast {
        margin-top: 5px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, .5);
        color: white;
        padding: 0 16px;
        border-radius: 4px;
        &>.message{
            padding: 9px 0;
        }
        &>.line{
            width: 0;
            height: 100%;
            border: 1px solid #666;
            margin: 0 16px;
        }
    }

</style>

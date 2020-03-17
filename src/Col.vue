<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
  let validator = (value) => {
    let valid = true
    let keys = Object.keys(value)
    keys.forEach(item => {
      if (!['span', 'offset'].includes(item)) {
        valid = false
      }
    })
    return valid
  }
  export default {
    props: {
      span: {type: [Number, String]},
      offset: {type: [Number, String]},
      phone: {type: Object, validator},
      ipad: {type: Object, validator},
      narrowPc: {type: Object, validator},
      pc: {type: Object, validator},
      widePc: {type: Object, validator}
    },
    data() {
      return {
        gutter: 0,
      }
    },
    computed: {
      colClass() {
        return [
          this.span && `col-${this.span}`,
          this.offset && `offset-${this.offset}`,
          this.phone && `col-phone-${this.phone.span}`,
          this.ipad && `col-ipad-${this.ipad.span}`,
          this.narrowPc && `col-narrowPc-${this.narrowPc.span}`,
          this.pc && `col-pc-${this.pc.span}`,
          this.widePc && `col-widePc-${this.widePc.span}`,
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    mounted() {
      this.gutter = this.$parent.gutter
    }
  }
</script>

<style scoped lang="scss">
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24) * 100%;
            }
        }

        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
        @media (max-width: 576px) {
            $class-prefix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }

            $class-prefix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
            $class-prefix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }

            $class-prefix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media (min-width: 769px) and (max-width: 992px) {
            $class-prefix: col-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }

            $class-prefix: offset-narrowPc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media (min-width: 993px) and (max-width: 1200px) {
            $class-prefix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }

            $class-prefix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media (max-width: 1201px) {
            $class-prefix: col-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }

            $class-prefix: offset-widePc-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
    }

</style>

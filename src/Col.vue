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
      ipad: {type: Object, validator},
      pc: {type: Object, validator},
      narrowPc: {type: Object, validator},
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
          ...this.createClasses({span: this.span, offset: this.offset}),
          ...this.createClasses(this.ipad, 'ipad-'),
          ...this.createClasses(this.narrowPc, "narrowPc-"),
          ...this.createClasses(this.pc, "pc-"),
          ...this.createClasses(this.widePc, "widePc-")
        ]
      },
      colStyle() {
        return {
          paddingLeft: this.gutter / 2 + 'px',
          paddingRight: this.gutter / 2 + 'px'
        }
      }
    },
    methods: {
      createClasses: (obj, str = "") => {
        if (!obj) return []
        let array = []
        if (obj.span) {
          array.push(`col-${str}${obj.span}`)
        }
        if (obj.offset) {
          array.push(`offset-${str}${obj.offset}`)
        }
        return array
      }
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


        @media (min-width: 577px) {
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
        @media (min-width: 769px) {
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
        @media (min-width: 993px) {
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
        @media (min-width: 1201px) {
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

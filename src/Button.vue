<template>
    <button class="v-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
        <v-icon v-if="icon && !loading" :name="icon" class="icon"></v-icon>
        <v-icon class="loading icon" name="loading" v-if="loading"></v-icon>
        <div class="content">
            <slot/>
        </div>
    </button>
</template>

<script>
  import Icon from "./Icon"

  export default {
    components: {
      'v-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      iconPosition: {
        type: String,
        default: "left",
        validator(val) {
          return val === 'left' || val === 'right'
        }
      }
    }
  }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .v-button {
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

        &:hover {
            border-color: var(--border-hover-color);
        }

        &:active {
            background: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        > .icon {
            width: 1em;
            height: 1.2em;
        }

        > .content {
            line-height: 1em
        }

        &.icon-left {
            > .icon {
                order: 1;
                margin-right: .1em;
                margin-left: 0
            }

            > .content {
                order: 2
            }
        }

        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em
            }

            > .content {
                order: 1
            }
        }

        .loading {
            animation: spin 1s infinite linear;
        }
    }
</style>


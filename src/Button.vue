<template>
    <button class="v-button">hello</button>
</template>

<script>
  export default {}
</script>

<style scoped lang="scss">
    .v-button{
        font-size: var(--font-szie);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        &:hover{
            border-color: var(--border-hover-color);
        }
        &:active{
            background: var(--button-active-bg);
        }
        &:focus{
            outline: none;
        }
    }
</style>

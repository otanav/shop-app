<template>
    <article class="header">
        <Navbar @toggle-menu-show="$emit('toggle-menu-show', $event)"/>
    </article>
</template>

<script>

import Navbar from "../Navbar.vue"

export default {
    name: "Header",
    components: {
        Navbar
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    background: black;
}

</style>
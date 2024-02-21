<script setup>
    import NavLeft from './top-nav/top-nav-left/NavLeft.vue'
    import NavRight from './top-nav/top-nav-right/NavRight.vue'
</script>

<template>
    <div class="nav-top">
        <!--Nav Left-->
        <NavLeft/>
        <!--Nav Right-->
        <NavRight/>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/sass/partials/variables';
    @import '../assets/sass/partials/mixings';
    .nav-top{
        @include flex-justify-between;
        width: 100%;
        height: $em-primary;
    }
</style>

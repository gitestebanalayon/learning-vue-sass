<script setup>
    function openBars() {
        const barsContainer = document.querySelector('.nav-left-global')
        barsContainer.classList.toggle('nav-left-global__active');
    }
</script>

<template>
    <div class="logo" @click="openBars()" id="bars">
        <i class="fa-solid fa-chevron-down"></i>
        <h1>Electronic</h1>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/sass/index.scss';
</style>

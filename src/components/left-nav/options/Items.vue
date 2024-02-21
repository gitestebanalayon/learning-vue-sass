<script setup>
    const options = [
        {
            icon: 'fas fa-home',
            name: 'Inicio'
        },
        {
            icon: 'fas fa-users',
            name: 'Clientes'
        },
        {
            icon: 'fas fa-tv',
            name: 'Aparatos'
        },
        {
            icon: 'fas fa-user-tie',
            name: 'Personal'
        }
    ]
</script>

<template>
    <ul class="options">
        <li v-for="option in options">
            <a href="#">
                <i :class="option.icon"></i>
                <p>{{ option.name }}</p>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @import '../../../assets/sass/index.scss';
</style>

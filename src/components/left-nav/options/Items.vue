<script setup>

    const options = [
        { icon: 'fas fa-home', name: 'Inicio' },
        { icon: 'fas fa-users', name: 'Clientes' },
        { icon: 'fas fa-tv', name: 'Aparatos' },
        { icon: 'fas fa-user-tie', name: 'Personal' },
        { icon: 'fa-solid fa-basket-shopping', name: 'Compras' },
        { icon: 'fa-solid fa-clock-rotate-left', name: 'Historial' },
        { icon: 'fa-solid fa-gears', name: 'Configuración'},
        { icon: 'fa-solid fa-trash', name: 'Papelera'}
    ]

</script>

<template>
    <ul class="options">
        <li v-for="option in options">
            <a href="#" id="opt" :name="option.name">
                <i :class="option.icon"></i>
                <p>{{ option.name }}</p>
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    @import '../../../assets/sass/index.scss';
</style>

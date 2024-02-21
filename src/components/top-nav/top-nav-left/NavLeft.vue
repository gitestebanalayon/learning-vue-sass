<script setup>

</script>

<template>
    <div class="nav-left">
        <div class="row">
            <form class="col">
                <input class="input" type="text" required>
                <button class="button fas fa-search"></button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/sass/partials/variables';
    @import '../../../assets/sass/partials/mixings';

    .nav-left{/*-------------------------------------------*/
        height: 100%;
        .row{/*--------------------------------------------*/
            @include flex-aling-center;
            height: 100%;
            .col{/*----------------------------------------*/
                @include flex-aling-center;
                height: 100%;
                position: relative;
                .input{
                    border: $app-border;
                    border-radius: $app-border-radius;
                    outline: none;
                    height: 100%;
                    padding: 0 $em-primary 0 0.5em;
                    font-size: 1em;
                    font-family: $app-font;
                    color: $app-color-black;
                    transition: $transition-primary;
                }
                .input:focus{
                    border: 1px solid rgb(130, 174, 255)
                }
                .button{
                    position: absolute;
                    top: 0;
                    right: 0;
                    background: rgba(255, 255, 255, 0);
                    font-size: $app-font-size;
                    color: $app-color-black;
                    border: none;
                    width: $em-primary;
                    height: 100%;
                    z-index: 1;
                    cursor: pointer;
                }
            }
        }
    }
</style>

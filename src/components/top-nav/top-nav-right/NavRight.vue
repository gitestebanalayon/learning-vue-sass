<script setup>

</script>

<template>
    <div class="nav-right">
        <div class="row">
            <div class="col">
                <button class="icon far fa-bell"></button>
                <span class="bell">5</span>
            </div>
            <div class="col">
                <button class="icon fas fa-user"></button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../../assets/sass/partials/variables';
    @import '../../../assets/sass/partials/mixings';
    .nav-right{
        height: 100%;
        .row{
            @include flex-aling-center;
            gap: 1em;
            height: 100%;
            .col{
                @include flex-justify-center;
                height: 100%;
                position: relative;
                .icon{
                    font-size: $app-font-size;
                    background: rgba(255, 255, 255, 0);
                    border: none;
                    cursor: pointer;
                }
                .bell{
                    position: absolute;
                    top: 4px;
                    right: -4px;
                    background: red;
                    padding: 0 2px;
                    border-radius: $app-border-radius;
                    color: #fff;
                    font-size: 10px;
                    font-weight: 700;
                }
            }
            .col:nth-child(2) .icon{
                border: $app-border;
                height: 100%;
                width: $em-primary;
                border-radius: 50%;
            }
        }
        
    }
</style>

<template>
    <div class="search-bar" :class="{active : isActive}">
        <div class="search-box">
            <div class="search">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search...">
            </div>
            <i class="fas fa-times"></i>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        isActive:{
            type:Boolean,
            default:() =>  false
        }
    }
}
</script>

<style lang="scss" scoped >
@import '../assets/styles/components/_mixins.scss';
@import '../assets/styles/components/_vars.scss';

.search-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: $dark;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 111111;
    transition: 0.5s;

    transform: translateY(-100%);
    &.active{
        transform: translateY(0);
    }

    .search-box{
        display: flex;
        align-items: center;

        .search{
            width: 400px;
            padding: 10px ;
            display: flex;
            align-items: center;
            background: $white;
            border-radius: 20px;

            i{
                margin-right: 10px;
                font-size: 14px;
                color: $black;
            }

            input{
                width: 100%;
                border: none;
            }
        }

        i{
            color: $white;
            margin-left: 20px;
            font-size: 25px;

        }
    }
}
</style>
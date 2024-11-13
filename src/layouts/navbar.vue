<template>
    <header class="header">
        <div class="navbar">
            <div class="container">
                <ul class="menu" v-if="!isMobile">
                    <li class="menu-item" v-for="item in menuArray" :key="item.text">
                        <a :href="item.link" class="link">{{ item.text }}</a>
                    </li>
                </ul>
                <!--  -->
                <div class="logo" :class="{active : isOpen}" >
                    <img :src="logoImage" alt="" class="logo-image">
                </div>
                <!-- -- -->
                <div class="action" v-if="!isMobile">
                    <!--  -->
                    <div class="search-bar" @click="$emit('isActive')" >
                        <i class="fas fa-search"></i>
                        <span>Поиск</span>
                    </div>
                    <!--  -->
                    <div class="auth">
                        <span>Вход/Регистрация</span>
                    </div>
                    <!-- - -->
                    <div class="act">
                        <i class="fas fa-user"></i>
                        <i class="fas fa-heart"></i>
                    </div>
                </div>
                <!-- Media -->

                <div :class="['burger-menu',{active : isOpen}]">
                    <ul class="burger-box">
                        <li class="burger-item" v-for="item in menuArray" :key="item.text">
                            <a :href="item.link" class="burger-link">{{ item.text }}</a>
                        </li>
                    </ul>
                    <!--  -->
                    <div class="burger-title">
                        <div class="burger-search_bar">
                            <i class="fas fa-search"></i>
                            <input type="text" placeholder="Search...">
                        </div>
                        <!--  -->
                        <div class="burger-act">
                            <i class="fas fa-user"></i>
                            <i class="fas fa-heart"></i>
                        </div>
                    </div>
                </div>

                <div class="burger" v-if="isMobile" >
                    <div class="login">
                        <i class="fas fa-sign-in"></i>
                    </div>
                    <div class="bur-menu">
                        <i class="fas fa-bars" v-if="!isOpen" @click="isOpen = true"></i>
                        <i class="fas fa-times" v-if="isOpen" @click="isOpen = false" ></i>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobile: false,
            isOpen: false,
            logoImage: require('../assets/images/logo/logo.png'),
            menuArray: [
                {
                    text: 'Контрагентам',
                    link: ''
                },
                {
                    text: 'Дизайнерам',
                    link: ''
                },
                {
                    text: 'Вакансии',
                    link: ''
                }
            ]
        }
    },
    methods: {
        MobileActive() {
            const WinWidth = window.innerWidth;

            if (WinWidth < 970) {
                this.isMobile = true
                return
            }
            this.isMobile = false
        },
    },

    mounted(){
        this.MobileActive()
       window.addEventListener('resize', this.MobileActive)
    }
}
</script>

<style lang="scss" >
@import '@/assets/styles/layouts/navbar.scss'
</style>
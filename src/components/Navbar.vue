<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import Username from '@/components/Username.vue'
import images1 from '../assets/images1.jpeg'
import { ref } from 'vue';

const img = images1

const is_hambergeur_active : boolean = false;
function changeStateHambergeur(){

}

</script>

<template>
    <div class="header">
        <div class="container">
            <div class="header__content">
                <div class="logo">
                    <RouterLink class="lo" to="/quizCategory">Quizeer</RouterLink>
                </div>      
                <div class="navLinks">
                    <RouterLink class="menu__item" to="/classementPage">CLASSEMENT</RouterLink>
                    <RouterLink class="menu__item" to="/">DECONNECTION</RouterLink>
                    <div class="user">
                        <div class="user__img__container">
                            <img :src="img" alt="">
                        </div>
                        <div class="user__mail">
                            <Username/>
                        </div>
                    </div> 
                    <div class="hambergeur__menu">
                    <span></span>
                  </div>
                </div>   
            </div>
        </div>
    </div>
</template>


<style scoped> 
    .header__content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
    }

    .menu__item{
    display: flex;
    justify-content: center;
    align-items: center;  
    gap: 25px;
    }
    .navLinks{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .menu__item{
        font-size: 1.25rem;
        color: #2c9bc6;
        font-weight: 700;
    }
     .user{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    .user .user__img__container{
        width: 25px;
        height: 25px;
    }
    .user .user__img__container img{
        display: flex;
        justify-content: center;
        align-items: center;
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
       
    } 

    .hambergeur__menu {
    width: 42px;
    height: 24px;
    cursor: pointer;
    transition: .5s ease-in-out; 
    }
    .hambergeur__menu span {
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #2c9bc6;
    transition: 0.5s ease-in-out;
    }
    .hambergeur__menu span::before,
    .hambergeur__menu span::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;
    background-color: #2c9bc6;
    transition: .5s ease-in-out;
    }
    .hambergeur__menu span::before {
    top: 8px;
    transition: .5s ease-in-out;
    }
    .hambergeur__menu span::after {
    top: -8px;
    transition: .5s ease-in-out;
    }
    .hambergeur__menu.active span {
    background-color: transparent;
    transition: .5s ease-in-out;
    }
    .hambergeur__menu.active span::before {
    top: 0;
    transform: rotate(45deg);
    }
    .header__content__left__menu.active span::after {
    top: 0;
    transform: rotate(-45deg);
    }
   
</style>
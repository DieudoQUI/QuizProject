<script lang="ts" setup>

import { createClient } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()


    const userDataRegister = ref({
        email:'',
        password:'',
        confirmPassword:''
    })

    async function createAccount() {
        const {data, error} = await supabase.auth.signUp({
            email:userDataRegister.value.email,
            password:userDataRegister.value.password,
            confirmPassword:userDataRegister.value.confirmPassword
        })
        if(error){
            console.log(error);
        }else{
            console.log(data)
            router.replace('/quizCategory')
        }
    }

</script>

<template>
    <body> 
        <div class="register__block">  
            <div class="register__block__left">
                <p>Devenez un érudit en vous inscrivant pour jouer à nos quiz.</p>
            </div>
            <div class="register__block__right">
                <div class="register__block__right__title">
                    <h2>Veuillez vous inscrire</h2>
                </div>
                <form id="loginForm" @submit.prevent>
                    <p id="error"></p>
                    <div id="usernameLogin" class="fieldGroup">
                        <label for="emailRegister">Email</label>
                        <input v-model="userDataRegister.email" type="email" name="usernameLogin" id="usernameLogin" placeholder="example@gmail.com">
                    </div>
                    <div id="passwordLogin" class="fieldGroup">
                        <label for="passwordRegister">Mot Passe</label>
                        <input v-model="userDataRegister.password" type="password" name="passwordLogin" id="passwordLogin" placeholder="Mot de Passe">
                    </div>
                    <div id="passwordLogin" class="fieldGroup">
                        <label for="passwordRegister">Confirmer Mot Passe</label>
                        <input v-model="userDataRegister.confirmPassword" type="password" name="passwordLogin" id="passwordLogin" placeholder="Confirmer Mot de Passe">
                    </div>
                    <div class="submit">
                        <button class="custom--btn--button" type="submit" @click="createAccount">Soumettre</button>
                    </div>
                </form>
            </div>
        </div>
    </body> 
</template>

<style scoped>

     body{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
    } 
    .register__block{
         display: flex;
         justify-content: center;
         align-items: center;
         flex-wrap: wrap;
        border-radius: 9px;
    }
    .register__block__left{
        width: calc(727px - 300px);
       /*  text-align: center; */
        padding: 1rem;
    }
    .register__block__left p{
        font-size: 55px;
        font-weight: bold;
        color: #999;
    }
    .register__block__left::before{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50% , -50%)rotate(45deg);
        background-color: #00000005; 
        z-index: -1;
    }
    .register__block__left:after{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top:50%;
        left: 0;
        transform: translate(-50% , -50%)rotate(45deg);
        background-color: #ffffff29; 
         z-index: -1;
    }
    .register__block__right::before{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top: 50%;
        right: 50%;
        transform: translate(-50% , -50%)rotate(45deg);
        background-color: #00000005; 
        z-index: -1;

    }
    .register__block__right:after{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top:50%;
        right: 0;
        transform: translate(-50% , -50%) rotate(45deg);
        background-color:#ffffff29; 
         z-index: -1;
    }
    .register__block__right{
        width: 325px;
        padding: 1rem;
        border-radius: 9px;
        box-shadow: inset 23px 4px 7px -25px #c9ccd7, 7px 0px 8px 2px#c9ccd7; 
    }
    .register__block__right__title{
        text-align: center;
    }
    .register__block__right__title h2{
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }
   #loginForm{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 25px;
    }
    .fieldGroup label{
        font-size: 20px;
       margin-bottom: 1rem;
       padding: 0 0 5rem 0;
       color: #999;
       font-weight: bold;
    }
    .fieldGroup input{
        display: block;
    }
    
</style>
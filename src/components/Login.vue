<script lang="ts" setup>
    import { supabase } from '@/lib/supabase';
    import {ref} from 'vue'
 
    import { useRouter } from 'vue-router';
    const router = useRouter()

    const userDataLogin = ref({
        email:'',
        password:''
    })
    async function loginAccount() {
        const {data, error} = await supabase.auth.signInWithPassword({
           email:userDataLogin.value.email,
           password:userDataLogin.value.password
        })
        if(error){
            console.log(error);
        }else{
            console.log(data)
            router.replace('/quizCategory')
        }
    }

    /* async function logout() {
        const {error} = await supabase.auth.signOut({
            if(error){
                console.log(error)
            }else{
                router.replace('/login')
                console.log('Déconnection bien effectuée')
            }
            
        }) 
        
    } */
  

</script>

<template>
     <body> 
        <div class="connection__block"> 
            <div class="connection__block__left">
                <p>Bienvenue! Merci de bien vouloir vous connecter  pour demeurer un érudit.</p>
            </div>
            <div class="connection__block__right">
                <div class="connection__block__right__title">
                    <h2>Connectez-vous pour quizer!</h2>
                </div>
                <form id="loginForm" @submit.prevent>
                    <p id="error"></p>
                    <div id="emailLogin" class="fieldGroup">
                        <label for="emailLogin">Email</label>
                        <input v-model="userDataLogin.email" type="email" name="emailLogin" id="usernameLogin" placeholder="example@gmail.com">
                    </div>
                    <div id="passwordLogin" class="fieldGroup">
                        <label for="passwordLogin">Mot Passe</label>
                        <input v-model="userDataLogin.password" type="password" name="passwordLogin" id="passwordLogin" placeholder="Mot de Passe">
                    </div>
                    <div class="submit">
                        <button @click="loginAccount" class="custom--btn--button" type="submit">Se Connecter</button>
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
    .connection__block{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        padding: 1rem;
        gap: 100px;
    }
    .connection__block__left::before{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top: 0;
        left: 0;
         transform: translate(-50% , -50%)rotate(45deg);
        background-color: #00000005;
        z-index: -1;

    }
    .connection__block__left:after{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top:50%;
        left: 0;
        transform: translate(-50% , -50%);
        transform: rotate(45deg);
        background-color: #ffffff29; 
         z-index: -1;
    }
    .connection__block__right::before{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
         transform: translate(-50% , -50%); 
        transform: rotate(45deg); 
        background-color: #00000005;
        z-index: -1;
    }
    .connection__block__right:after{
        content: " ";
        position: absolute;
        display: block;
        width: 200px;
        height: 200px;
        top:50%;
        right: 0;
        transform: translate(-50% , -50%);
        transform: rotate(45deg);
        background-color: #ffffff29; 
        z-index: -1;
    }
    .connection__block__left{
        width: calc(727px - 300px); 
        text-align: center;
    }
    .connection__block__left p{
        font-size: 55px;
        font-weight: bold;
        color: #999;
    }
    .connection__block__right{
        width: 350px;
        padding: 1rem;
        border-radius: 9px;
        box-shadow: inset 23px 4px 7px -25px #c9ccd7, 7px 0px 8px 2px#c9ccd7; 
    }
    .connection__block__right__title{
        text-align: center;
    }
    .connection__block__right__title h2{
        margin-top: 2rem;
        font-weight: bold;
        font-size: 25px;
        color: #333;
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
        margin-top: 5rem 0 0 0;
    }
    
</style>
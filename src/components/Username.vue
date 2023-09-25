<script lang="ts" setup>
import { supabase } from '@/lib/supabase';
import { ref } from 'vue';

 const userEmail = ref() 
 async function getSession(){
  const user = await supabase.auth.getUser();
  if(user){
    userEmail.value = user.data.user?.email?.split("@")[0];
    console.log(userEmail);
  }
 }
 getSession()


</script>
<template>

<div>
    <p id="usermail"> {{ userEmail }}</p>
</div>
</template>

<style scoped>
    #usermail{
        color: #2c9bc6;
        }
</style>
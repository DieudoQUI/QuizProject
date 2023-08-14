 <script lang="ts" setup>

import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue'
import type { ModeAccessPage } from '@/types/mode';
import { ref } from 'vue'

import Access from '@/components/Access.vue';

const mode = ref<ModeAccessPage>()
function selectMode(value: ModeAccessPage) {
     mode.value = value 

}

</script> 
<template>
       <Access @move="selectMode"/> 
    <!-- mehthode de access page -->
   
   <div class="container">
        <div class="accessPage__content">
            <div class="" v-if="mode == 'signIn'">
                <Login/>
            </div>
            <div class="ff" v-else>
                <Register/>
            </div> 
        </div>  
       
   </div>
  

 </template> 
<style scoped>
.accessPage__content{
    display: flex;
     justify-content: center;
    align-items: center; 
   
}
.message__welcome{
    display: flex;
    justify-content: center;
    align-items: center;
}
.message__welcome p{
    font-size: 45px;
    font-weight: bold;
    color: #999;
}


</style>

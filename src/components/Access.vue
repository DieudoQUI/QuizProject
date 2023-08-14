 <script lang="ts" setup>

import {ref} from 'vue'
import BtnSignUp from '@/components/BtnSignUp.vue'
import BtnSignIn from '@/components/BtnSignIn.vue'
import type {ModeAccessPage} from '@/types/mode'
import { RouterLink } from 'vue-router';
import { watch } from 'vue';

const modetype = ref<ModeAccessPage>('signIn')
const emits = defineEmits(['move'])

watch(modetype,(value)=>{
    emits('move',value)
})




</script>  

<template>

  <div class="access__block">
    <div class="container">
        <div class="access__block">
            <div class="sign__up" :class="{active: modetype == 'signUp'}" @click="modetype = 'signUp'" >
                <BtnSignUp/>     
            </div>
            <div class="sign__in" :class="{active: modetype == 'signIn'}" @click="modetype= 'signIn'" >
                <BtnSignIn/>      
            </div>
        </div>
    </div>
  </div>

</template>


<style scoped>
 .access__block{
    padding-top:10px ;
    display: flex;
    justify-content: space-between;
    gap: 50px
  
} 
</style>


 
import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase"


type userData = {
    email:string;
    password:string;
   
};

export const useUserStore = defineStore('user', () =>{
  
    const users = ref<userData[]>([]);


    async function initialise(){
        const {data, error} = await supabase.from('user').select("email, password")
     
       if (data) {
            users.value=data
       }
      console.log(data)
    }


    async function addUser(user : userData){
        const {data, error} = await supabase.from('user').insert(user).select("email,password");
        if (data) {
            users.value.push(data[0])
        }
    }
   
    /*  async function getUserName(user:userData) {
       let data = supabase.auth.getSession
        
    const userName = computed(() => data.split('@'))
    function userName() {
    
      }
    } */
    return {users,initialise,addUser }
})
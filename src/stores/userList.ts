import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { supabase } from "@/lib/supabase"
import { useLocalStorage } from "@vueuse/core";


type userData = {
    email:string;
    password:string;
   
};
const userEmail = ref()

export const useUserStore = defineStore('user', () =>{
    /*   const saveUserConnect = useLocalStorage('user',null)  */
  
    const users = ref<userData[]>([]);
    const userEmail =ref<string>()


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

    

    async function getUserConnect() {
        const { data } = await supabase.auth.getSession();
        if(data.session){
            userEmail.value = data.session?.user.email
            console.log(userEmail);
            return userEmail;       
        }    
    }
   
     /* async function getUserName() {
       let data = supabase.auth.getSession
       if(users){
           userEmail.value = users.data.user?.email?.split("@")[0];
           console.log(userEmail); 
        const userName = computed(() => data.user?.email.split('@'))
        console.log(userName) ;
    
    } */
    return {users, userEmail, initialise,addUser, getUserConnect}
    }
)
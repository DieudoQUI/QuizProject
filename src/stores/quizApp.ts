/* import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { quizApp } from "@/types/quizApp";


export const useQuizAppStore = defineStore('quizApp' , () =>{
    const quizsApp = ref <quizApp[]>([]);

    async function initialise(){
        const { data , error} = await supabase.from('quizApp').select('id, question, answer, options, selected')
        if(error){
            console.log(error)
        }
        else{
            quizsApp.value=data
        }
        console.log(data);
        
    }
    return {quizsApp, initialise}
})
 */
import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { quizApp } from "@/types/quizApp"; // Assurez-vous que le type soit correctement importé

export const useQuizAppStore = defineStore("quizApp", () => {
  const quizsApp = ref<quizApp[]>([]);

  async function initialise() {
    try {
      const { data, error } = await supabase
        .from("quizApp")
        .select("id, question, answer, options, selected");

      if (error) {
        console.error(error);
      } else {
        quizsApp.value = data || []; // Assurez-vous que data soit défini ou un tableau vide
      }
    } catch (error) {
      console.error(error);
    }
  }

  return { quizsApp, initialise };
});





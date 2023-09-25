import { defineStore } from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { quizApp } from "@/types/quizApp"; // Assurez-vous que le type soit correctement importé
import  type { historique} from "@/types/historique";

export const useQuizAppStore = defineStore("quizApp", () => {
  const quizsApp = ref<quizApp[]>([]);
/*   const playerStoryData = ref<historique[]>([]);
 */
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
  async function sendPlayerStoryData(playerData:historique) {
    const { data , error} = await supabase 
    .from('quizApp')
    .insert(playerData).select();

  }

  return { quizsApp, initialise, sendPlayerStoryData };
});





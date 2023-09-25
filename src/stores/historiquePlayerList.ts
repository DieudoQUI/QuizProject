import { defineStore } from "pinia"
import { ref } from "vue";
import { supabase } from "@/lib/supabase";

import  type { historique} from "@/types/historique";

export const useHistoriquePlayerStore = defineStore("historiquePlayerList", () => {

    const playerStoryData = ref<historique[]>([]);

    async function sendPlayerStoryData(playerData:historique) {
        const { data , error} = await supabase 
        .from('playerData')
        .insert(playerData).select();
    
    }

    const listInformationHistoriqueDB = ref<historique[]>([]);
  async function initialise() {
    try {
      const { data, error } = await supabase
        .from("playerData")
        .select("users_id, namePlayer, quizScore, timeMake, userPlayDate");

      if (error) {
        console.error(error);
      } else {
        listInformationHistoriqueDB.value = data || []; 
      }
    } catch (error) {
      console.error(error);
    }
  }
      return { playerStoryData,listInformationHistoriqueDB, sendPlayerStoryData, initialise}
});
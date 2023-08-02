import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

import AthleteData from "@/assets/data.json";

export const useAthleteStore = defineStore("useAthleteStore", {
  state: () => ({
    athlete: useLocalStorage("athlete", AthleteData.data[0]),
  }),
  actions: {
    setAthleteName(name) {
      this.athlete.name = name;
    },
  },
});

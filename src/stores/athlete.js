import { defineStore } from "pinia";
import AthleteData from "@/assets/data.json";

export const useAthleteStore = defineStore("useAthleteStore", {
  state: () => ({
    athlete: AthleteData.data[0],
  }),
  actions: {
    setAthleteName(name) {
      this.athlete.name = name;
    },
  },
});

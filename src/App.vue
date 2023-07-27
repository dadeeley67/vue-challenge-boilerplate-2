<template>
  <div class="container border-t-8 border-b-8 border-primary">
    <AcademicFitReport :athlete="athlete_info" />
  </div>
</template>

<script>
import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";
export default {
  name: "app",
  components: { AcademicFitReport },
  data: function () {
    return {
      athlete_info: AthleteData.data[0],
    };
  },
};
</script>

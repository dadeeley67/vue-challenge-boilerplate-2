<template>
  <td :class="gpaColor">{{ gpaToTwoDecimals(gpaSchool) }}</td>
</template>

<script>
import mixin from "@/mixins/mixin";
export default {
  name: "GpaColumn",
  mixins: [mixin],
  props: {
    athleteGpa: Number,
    gpaSchool: Number,
  },
  computed: {
    gpaColor: {
      get() {
        let gpaDiff = this.gpaSchool - this.athleteGpa;

        switch (true) {
          case gpaDiff > 0.1:
            return "bg-schoolGpaAboveMoreThan text-center";
          case gpaDiff > 0.05 && gpaDiff < 0.1:
            return "bg-schoolGpaAboveLessThan text-center";
          case gpaDiff > 0 && gpaDiff < 0.05:
            return "bg-schoolGpaAbove text-center";
          case gpaDiff === 0:
            return "bg-schoolGpaEqual text-center";
          case gpaDiff > -0.1 && gpaDiff < 0:
            return "bg-schoolGpaUnder text-center";
          case gpaDiff > -0.2 && gpaDiff < -0.1:
            return "bg-schoolGpaUnderLessThan text-center";
          case gpaDiff < -0.2:
            return "bg-schoolGpaUnderMoreThan text-center";
          default:
            return "text-center";
        }
      },
    },
  },
};
</script>

<template>
  <td class="text-center" :class="gpaColor">
    {{ gpaToTwoDecimals(gpaSchool) }}
  </td>
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
            return "bg-schoolGpaAboveMoreThan";
          case gpaDiff > 0.05 && gpaDiff < 0.1:
            return "bg-schoolGpaAboveLessThan";
          case gpaDiff > 0 && gpaDiff < 0.05:
            return "bg-schoolGpaAbove";
          case gpaDiff === 0:
            return "bg-schoolGpaEqual";
          case gpaDiff > -0.1 && gpaDiff < 0:
            return "bg-schoolGpaUnder";
          case gpaDiff > -0.2 && gpaDiff < -0.1:
            return "bg-schoolGpaUnderLessThan";
          case gpaDiff < -0.2:
            return "bg-schoolGpaUnderMoreThan";
          default:
            return "bg-schoolGpaEqual";
        }
      },
    },
  },
};
</script>

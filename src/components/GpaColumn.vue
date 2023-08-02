<template>
  <td class="text-center" :class="gpaColor">
    {{ useGpaToTwoDecimals(gpaSchool) }}
  </td>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useGpaToTwoDecimals } from "@/composables/useGpaToTwoDecimals";

const { athleteGpa, gpaSchool } = defineProps({
  athleteGpa: Number,
  gpaSchool: Number,
});

const gpaColor = computed(() => {
  let gpaDiff = gpaSchool - athleteGpa;

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
});
</script>

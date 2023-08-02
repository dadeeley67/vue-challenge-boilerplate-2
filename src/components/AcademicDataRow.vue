<template>
  <tr class="odd:bg-oddRow group">
    <td class="p-2 sticky left-0 group-odd:bg-oddRow group-even:bg-white">
      {{ entry.school }}
    </td>
    <td class="text-center">{{ entry.division }}</td>
    <td>{{ entry.conference }}</td>
    <td class="text-center">{{ entry.ranking }}</td>

    <td class="text-center">{{ useGpaToTwoDecimals(entry.gpa.min) }}</td>
    <td class="text-center">{{ useGpaToTwoDecimals(entry.gpa["25%"]) }}</td>

    <GpaColumn :athleteGpa="athleteGpa" :gpaSchool="entry.gpa['50%']" />

    <td class="text-center">{{ useGpaToTwoDecimals(entry.gpa["75%"]) }}</td>
    <td class="text-center">{{ useGpaToTwoDecimals(entry.gpa.max) }}</td>

    <td class="text-center">
      {{ entry.sat.reading.min }} - {{ entry.sat.reading.max }}
    </td>
    <td class="text-center">
      {{ entry.sat.math.min }} - {{ entry.sat.math.max }}
    </td>
    <td class="text-center">{{ entry.act.min }} - {{ entry.act.max }}</td>
  </tr>
</template>

<script setup>
import { defineProps } from "vue";
import GpaColumn from "./GpaColumn.vue";
import { useGpaToTwoDecimals } from "@/composables/useGpaToTwoDecimals";

const { entry, athleteGpa } = defineProps({
  entry: Object,
  athleteGpa: Number,
});
</script>

<template>
  <tr class="odd:bg-oddRow">
    <td class="p-2">{{ entry.school }}</td>
    <td class="text-center">{{ entry.division }}</td>
    <td>{{ entry.conference }}</td>
    <td class="text-center">{{ entry.ranking }}</td>

    <td class="text-center">{{ gpaToTwoDecimals(entry.gpa.min) }}</td>
    <td class="text-center">{{ gpaToTwoDecimals(entry.gpa["25%"]) }}</td>
    <td class="text-center">{{ gpaToTwoDecimals(entry.gpa["50%"]) }}</td>
    <td class="text-center">{{ gpaToTwoDecimals(entry.gpa["75%"]) }}</td>
    <td class="text-center">{{ gpaToTwoDecimals(entry.gpa.max) }}</td>

    <td class="text-center">
      {{ entry.sat.reading.min }} - {{ entry.sat.reading.max }}
    </td>
    <td class="text-center">
      {{ entry.sat.math.min }} - {{ entry.sat.math.max }}
    </td>
    <td class="text-center">{{ entry.act.min }} - {{ entry.act.max }}</td>
  </tr>
</template>

<script>
export default {
  name: "AcademicDataRow",
  props: {
    entry: Object,
  },
  methods: {
    gpaToTwoDecimals(gpa) {
      return gpa.toFixed(2);
    },
  },
};
</script>

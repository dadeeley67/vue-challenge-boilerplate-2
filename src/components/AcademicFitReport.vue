<template>
  <div class="mt-16 ml-12">
    <div class="flex">
      <img
        class="w-24 h-24 rounded-full mr-2"
        src="@/assets/avatar.png"
        alt="Rounded avatar"
      />

      <div class="info flex">
        <div>
          <h2 class="text-primary font-bold text-xl">{{ athlete.name }}</h2>
          <div class="grid grid-cols-2">
            <ul>
              <li>
                <label class="font-bold">Sport:</label>
                {{ athlete.sport }}
              </li>

              <li>
                <label class="font-bold">Class:</label>
                {{ athlete.grad_year }}
              </li>

              <li>
                <label class="font-bold">Club:</label>
                {{ athlete.club.name }}
              </li>
            </ul>
            <ul>
              <li>
                <label class="font-bold">High School:</label>
                {{ athlete.high_school.name }}
              </li>

              <li>
                <label class="font-bold">GPA:</label>
                {{ athlete.gpa }}
              </li>

              <li>
                <label class="font-bold">Desired Major:</label>
                {{ athlete.major }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="flex flex-1 flex-col">
        <img class="w-60 h-auto self-end" src="@/assets/sr-logo.png" alt="" />
        <h2 class="mt-2 text-xl text-right">Academic Fit Report</h2>
      </div>
    </div>

    <div class="container mt-14">
      <table class="text-xs table-auto w-full">
        <thead class="bg-secondary text-white">
          <th>School Name</th>
          <th>Athletic Div</th>
          <th>Conference</th>
          <th>
            Ranking*
            <p class="text-xxs font-light">(DI NCAA)</p>
            <p class="text-xxs font-light">(DII & DIII Hero Sports)</p>
          </th>
          <th colspan="5">
            GPA**
            <table class="w-full">
              <thead>
                <th>Min</th>
                <th>25%</th>
                <th>50%</th>
                <th>75%</th>
                <th>Max</th>
              </thead>
            </table>
          </th>

          <th>
            SAT Reading***
            <p>25%-75%</p>
          </th>
          <th>
            SAT Math***
            <p>25%-75%</p>
          </th>
          <th>
            ACT Composite***
            <p>25%-75%</p>
          </th>
        </thead>

        <tr
          v-for="entry in athlete.report"
          :key="entry.school"
          class="odd:bg-oddRow"
        >
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
      </table>
    </div>
    <div class="mt-36 mb-6">
      <p class="text-xs">
        *Rankings for Division I schools based on NCAA data (www.ncaa.com) and
        rankings for Division II & III schools are based on data from Hero
        Sports (www.herosports.com/rankings)
      </p>
      <p class="text-xs">
        ** GPA is based on SportsRecruits members who have shown interest in
        (favorited) the school and have provided their GPA on their profile
      </p>
      <p class="text-xs">
        *** SAT/ACT scores are based on SportsRecruits members who have shown
        interest in (favorited) the school and have provided their SAT/ACT
        scores on their profile
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AcademicFitReport",
  props: {
    athlete: { type: Object, required: false },
  },
  computed: {
    gpaToTwoDecimals() {
      return (gpa) => {
        return gpa.toFixed(2);
      };
    },
  },
};
</script>

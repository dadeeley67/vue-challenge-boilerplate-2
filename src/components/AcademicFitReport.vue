<template>
  <div class="mt-16 ml-12 mr-12 mb-16 md:mr-0 md:mb-0">
    <div class="flex sm:flex-row flex-col">
      <img
        v-if="athlete.profile_image"
        class="w-24 h-24 rounded-full mr-2 order-2 sm:order-1 sm:mt-0 mt-4"
        :src="athlete.profile_image"
        :alt="athlete.name"
      />
      <div
        v-else
        class="mr-2 order-2 sm:order-1 sm:mt-0 mt-4 inline-flex items-center justify-center w-24 h-24 overflow-hidden rounded-full"
        :class="determineAvatarBackgroundColor"
      >
        <span class="font-medium text-white text-4xl">{{
          getAthelteInitialsCapitalized
        }}</span>
      </div>

      <div class="info sm:flex order-3 sm:order-2 sm:mt-0 mt-4">
        <div>
          <h2 class="text-primary font-bold text-xl">{{ athlete.name }}</h2>
          <div class="lg:grid lg:grid-cols-2">
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
      <div class="sm:flex sm:flex-1 sm:flex-col order-1 sm:order-3">
        <img
          class="w-60 h-auto sm:self-end"
          src="@/assets/sr-logo.png"
          alt=""
        />
        <h2 class="mt-2 lg:text-xl sm:text-right md:text-lg">
          Academic Fit Report
        </h2>
      </div>
    </div>

    <div class="container mt-14 overflow-x-scroll">
      <table class="text-xs table-auto w-full">
        <thead class="bg-secondary text-white">
          <th class="sticky left-0 bg-secondary">School Name</th>
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
        <AcademicDataRow
          v-for="entry in athlete.report"
          :key="entry.school"
          :entry="entry"
          :athleteGpa="athlete.gpa"
        />
      </table>
    </div>
    <div class="mt-20 md:mt-36 mb-6">
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
import AcademicDataRow from "./AcademicDataRow.vue";

export default {
  name: "AcademicFitReport",
  props: {
    athlete: { type: Object, required: false },
  },
  components: {
    AcademicDataRow,
  },
  computed: {
    getAthelteInitialsCapitalized: function () {
      return this.athlete.name
        .split(" ")
        .map((name) => name[0].toUpperCase())
        .join("");
    },
    determineAvatarBackgroundColor: function () {
      let initial = this.athlete.name.split(" ")[1][0];

      let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
      let groups = [];
      let groupSize = Math.ceil(alphabet.length / 6);

      while (alphabet.length > 0) {
        groups.push(alphabet.splice(0, groupSize));
      }

      let group = () => {
        for (let i = 0; i < groups.length; i++) {
          if (groups[i].includes(initial.toLowerCase())) {
            return i;
          }
        }
      };

      switch (group()) {
        case 0:
          return "bg-avatarPlaceHolder";
        case 1:
          return "bg-avatarPlaceHolder2";
        case 2:
          return "bg-avatarPlaceHolder3";
        case 3:
          return "bg-avatarPlaceHolder4";
        case 4:
          return "bg-avatarPlaceHolder5";
        case 5:
          return "bg-avatarPlaceHolder6";
      }

      return null;
    },
  },
};
</script>

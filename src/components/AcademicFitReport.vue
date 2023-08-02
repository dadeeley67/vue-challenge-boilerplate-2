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
          <h2 class="text-primary font-bold text-xl">
            <input
              type="text"
              :value="athlete.name"
              @keyup.enter="setAthleteName"
              v-on:focusout="setAthleteName"
              class="hover:border-primary border-b-2 border-transparent focus:border-primary focus:outline-none"
            />
          </h2>
          <div v-if="nameError" class="text-red-600">
            Please enter at least two words.
          </div>
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
import { useAthleteStore } from "@/stores/athlete";

export default {
  name: "AcademicFitReport",
  data() {
    return {
      store: useAthleteStore(),
      nameError: false,
      alphabet: "abcdefghijklmnopqrstuvwxyz".split(""),
      groups: [],
    };
  },
  components: {
    AcademicDataRow,
  },
  methods: {
    setAthleteName(e) {
      e.target.value = this.removeNumbersFromString(e.target.value);
      e.target.value = this.trimEndOfStringWhitespace(e.target.value);

      if (e.target.value === this.store.athlete.name) {
        return;
      }

      const words = this.splitName(e.target.value);

      this.nameError = words.length < 2 || words[1].length === 0;
      if (!this.nameError) {
        this.store.setAthleteName(e.target.value);
        e.target.blur();
      }
    },
    trimEndOfStringWhitespace(str) {
      return str.replace(/\s*$/, "");
    },
    isNameMoreThanOneWord(name) {
      let words = name.split(" ");
      return words.length > 1;
    },
    splitName(name) {
      return name.split(" ");
    },
    removeNumbersFromString(str) {
      return str.replace(/\d+/g, "");
    },
  },
  created() {
    let groupSize = Math.ceil(this.alphabet.length / 6);

    while (this.alphabet.length > 0) {
      this.groups.push(this.alphabet.splice(0, groupSize));
    }
  },
  computed: {
    athlete() {
      return this.store.athlete;
    },
    getAthelteInitialsCapitalized: function () {
      if (this.athlete.name) {
        let name = this.splitName(this.athlete.name);
        return (
          name[0][0].toUpperCase() + name[name.length - 1][0].toUpperCase()
        );
      } else {
        return "";
      }
    },
    determineAvatarBackgroundColor: function () {
      if (this.isNameMoreThanOneWord(this.athlete.name)) {
        let words = this.splitName(this.athlete.name);
        let lengthOfLastName =
          this.athlete.name.split(" ")[words.length - 1].length;
        if (lengthOfLastName > 1) {
          let initial = this.athlete.name.split(" ")[words.length - 1][0];

          let group = () => {
            for (let i = 0; i < this.groups.length; i++) {
              if (this.groups[i].includes(initial.toLowerCase())) {
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
        }
      }

      return "bg-avatarPlaceHolder";
    },
  },
};
</script>

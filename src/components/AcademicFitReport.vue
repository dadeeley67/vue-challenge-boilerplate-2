<template>
  <div class="mt-16 ml-12 mr-12 mb-16 md:mr-0 md:mb-0">
    <div class="flex sm:flex-row flex-col">
      <img
        v-show="doesProfilePictureExist"
        class="w-24 h-24 rounded-full mr-2 order-2 sm:order-1 sm:mt-0 mt-4"
        :src="athlete.profile_image"
        :alt="athlete.name"
        id="athleteImage"
      />
      <div
        v-show="!doesProfilePictureExist"
        id="avatarPlaceholder"
        class="mr-2 order-2 sm:order-1 sm:mt-0 mt-4 inline-flex items-center justify-center w-24 h-24 overflow-hidden rounded-full"
        :class="determineAvatarBackgroundColor"
      >
        <span class="font-medium text-white text-4xl">{{
          getAthelteInitialsCapitalized
        }}</span>
      </div>

      <div
        id="athleteStats"
        class="info sm:flex order-3 sm:order-2 sm:mt-0 mt-4"
      >
        <div>
          <h2 class="text-primary font-bold text-xl">
            <input
              id="athleteName"
              data-cy="submit-athlete-name"
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
      <div id="srLogo" class="sm:flex sm:flex-1 sm:flex-col order-1 sm:order-3">
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

    <div id="report" class="container mt-14 overflow-x-scroll">
      <table class="text-xs table-auto w-full">
        <thead class="bg-secondary text-white">
          <th id="schoolNameColumn" class="sticky left-0 bg-secondary">
            School Name
          </th>
          <th id="athleticDiv">Athletic Div</th>
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

<script setup>
import { ref, computed } from "vue";

import AcademicDataRow from "./AcademicDataRow.vue";
import { useAthleteStore } from "@/stores/athlete";

const store = useAthleteStore();

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let groups = [];
let groupSize = Math.ceil(alphabet.length / 6);
while (alphabet.length > 0) {
  groups.push(alphabet.splice(0, groupSize));
}

const nameError = ref(false);

const trimEndOfStringWhitespace = (str) => {
  return str.replace(/\s*$/, "");
};

const splitName = (name) => {
  return name.split(" ");
};

const removeNumbersFromString = (str) => {
  return str.replace(/\d+/g, "");
};

const setAthleteName = (e) => {
  e.target.value = removeNumbersFromString(e.target.value);
  e.target.value = trimEndOfStringWhitespace(e.target.value);

  if (e.target.value === store.athlete.name) {
    return;
  }

  const words = splitName(e.target.value);

  nameError.value = words.length < 2 || words[1].length === 0;
  if (!nameError.value) {
    store.setAthleteName(e.target.value);
    e.target.blur();
  }
};

const isNameMoreThanOneWord = (name) => {
  return name.split(" ").length > 1;
};

const athlete = computed(() => {
  return store.athlete;
});

const doesProfilePictureExist = computed(() => {
  return athlete.value.profile_image !== "";
});

const getAthelteInitialsCapitalized = computed(() => {
  if (athlete.value.name) {
    let name = splitName(athlete.value.name);
    return name[0][0].toUpperCase() + name[name.length - 1][0].toUpperCase();
  } else {
    return "";
  }
});

const determineAvatarBackgroundColor = computed(() => {
  if (isNameMoreThanOneWord(athlete.value.name)) {
    let words = splitName(athlete.value.name);
    let lengthOfLastName =
      athlete.value.name.split(" ")[words.length - 1].length;
    if (lengthOfLastName > 1) {
      let initial = athlete.value.name.split(" ")[words.length - 1][0];

      let group = () => {
        for (let i = 0; i < groups.length; i++) {
          if (groups[i].includes(initial.toLowerCase())) {
            return i;
          }
        }
      };

      switch (group()) {
        case 0:
          return "bg-avatarPlaceholder";
        case 1:
          return "bg-avatarPlaceholder2";
        case 2:
          return "bg-avatarPlaceholder3";
        case 3:
          return "bg-avatarPlaceholder4";
        case 4:
          return "bg-avatarPlaceholder5";
        case 5:
          return "bg-avatarPlaceholder6";
      }
    } else {
      return "bg-avatarPlaceholder";
    }
  }
  return "bg-avatarPlaceholder";
});
</script>

<template>
  <div class="container mx-auto max-w-content px-4 py-6">
    <div class="grid lg:grid-cols-3 gap-6">
      <div
        v-for="(item, itemIndex) in data.submenu"
        :key="itemIndex"
      >
        <div class="flex space-x-2.5 mb-5 text-brand-blue">
          <component :is="item.titleIcon" />
          <h3 class="text-xl font-bold">{{ item.title }}</h3>
        </div>

        <div class="flex flex-col ml-9 space-y-10">
          <div v-for="(link, linkIndex) in item.links" :key="linkIndex" class="space-y-5">
            <a
              href="#"
              class="text-black hover:text-brand-blue flex items-center gap-2.5 text-lg font-bold"
            >
              {{ link.link }}
              <ChevronDown class="-rotate-90" />
            </a>

            <p>{{ link.text }}</p>
          </div>
        </div>
      </div>

      <div>
        <div class="flex space-x-2.5 mb-5 text-brand-blue">
          <MagnifyingGlassChartIcon />
          <h3 class="text-xl font-bold">Případové studie</h3>
        </div>

        <div class="flex flex-col ml-9 space-y-10">
          <div class="w-[18.125rem] h-[9.375rem] bg-brand-blue-10"></div>

          <p>Inspirujte se úspěšnými příběhy našich klientů a jejich podnikání.</p>

          <GButton btn-text="Přečíst studie" btn-color="brand-blue" class="w-fit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BookOpenIcon from "assets/icons/book-open-icon.vue";
import CommentsQuestionIcon from "assets/icons/comments-question-icon.vue";
import ChevronDown from "assets/icons/chevron-down.vue";
import MagnifyingGlassChartIcon from "assets/icons/magnifying-glass-chart-icon.vue";

const data = {
  submenu: [
    {
      title: "Vzdělávejte se s EK",
      titleIcon: BookOpenIcon,
      links: [
        {
          link: "Blog",
          text: "Na našem blogu pravidelně informujeme o našich nových funkcích a zajímavostech ze světa e-mail marketingu."
        },
        {
          link: "E-booky a webináře",
          text: "Inspirujte se vzdělávacími materiály."
        },
        {
          link: "Videonávody",
          text: "Koukněte na náš YouTube kanál. Pomocí komentovaných videonávodů se vše naučíte rychle a efektivně."
        },
      ],
    },
    {
      title: "Technická podpora",
      titleIcon: CommentsQuestionIcon,
      links: [
        {
          link: "Knowledge base",
          text: "Naučtě se pracovat s naší aplikací  a staňte se profesionálem v e-mail marketingu."
        },
        {
          link: "Dokumentace API",
          text: "Přehledná dokumentace pro naše pokročílé API rozhraní."
        },
        {
          link: "FAQ",
          text: "Najděte rychle odpovědi na nejčastěji kladené otázky."
        },
      ],
    },
  ],
}
</script>

<style scoped>

</style>
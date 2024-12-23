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
        <ul class="space-y-5 ml-9">
          <li
            v-for="(subItem, subIndex) in item.links"
            :key="subIndex"
          >
            <a
              href="#"
              class="text-gray-600 hover:text-brand-blue"
            >
              {{ subItem }}
            </a>
          </li>
        </ul>

        <a
          href="#"
          class="text-black hover:text-brand-blue flex items-center gap-2.5 ml-9 mt-10 text-lg font-bold"
        >
          {{ item.mainLink }}
          <ChevronDown class="-rotate-90" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChevronDown from "assets/icons/chevron-down.vue";
import PaperPlaneIcon from "assets/icons/paper-plane-icon.vue";
import BriefcaseIcon from "assets/icons/briefcase-icon.vue";
import GearIcon from "assets/icons/gear-icon.vue";

const data = {
  submenu: [
    {
      title: "Rozesílání e-mailů",
      titleIcon: PaperPlaneIcon,
      links: ["E-mail marketing", "Automatizace", "Editor šablon", "Transakční e-maily", "Reporty a statistiky"],
      mainLink: "Všechny funkce"
    },
    {
      title: "Oborová řešení",
      titleIcon: BriefcaseIcon,
      links: ["Agentury", "Automotive", "E-commerce", "Incident management", "Právní kanceláře"],
      mainLink: "Všechny oborová řešení"
    },
    {
      title: "Služby",
      titleIcon: GearIcon,
      links: ["Šablona na míru", "Školení", "Secure&Identity pack", "Napojení vlastního systému", "Kontrola domény"],
      mainLink: "20+ integrací"
    },
  ],
}
</script>

<style scoped>

</style>
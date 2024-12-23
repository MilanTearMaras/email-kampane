<template>
  <div class="container mx-auto max-w-content px-4 py-6">
    <div class="grid lg:grid-cols-2 gap-6">
      <div
          v-for="(item, itemIndex) in data.submenu"
          :key="itemIndex"
      >
        <div class="flex space-x-2.5 mb-5 text-brand-blue">
          <component :is="item.titleIcon" />
          <h3 class="text-xl font-bold">{{ item.title }}</h3>
        </div>

        <p class="ml-9 text-black font-normal">{{ item.text }}</p>

        <GButton :btn-text="item.button.text" btn-color="brand-blue" btn-style="filled" class="ml-9 mt-5" />
      </div>
    </div>
  </div>

  <div class="w-full border-t border-dashed border-medium-grey py-7">
    <div class="container mx-auto max-w-content flex items-center justify-between">
      <p v-html="address" class="font-normal text-black ml-9" />

      <div class="flex space-x-[1.563rem]">
        <a href="/" class="hover:text-brand-blue">
          <InstagramIcon />
        </a>
        <a href="/" class="hover:text-brand-blue">
          <LinkedInIcon />
        </a>
        <a href="/" class="hover:text-brand-blue">
          <XIcon />
        </a>
        <a href="/" class="hover:text-brand-blue">
          <YoutubeIcon />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LocationPinIcon from "assets/icons/location-pin-icon.vue";
import UserGroupIcon from "assets/icons/user-group-icon.vue";
import ThumbsUpIcon from "assets/icons/thumbs-up-icon.vue";
import BriefcaseIcon from "assets/icons/briefcase-icon.vue";
import InstagramIcon from "assets/icons/instagram-icon.vue";
import LinkedInIcon from "assets/icons/linkedIn-icon.vue";
import XIcon from "assets/icons/x-icon.vue";
import YoutubeIcon from "assets/icons/youtube-icon.vue";

const data = {
  submenu: [
    {
      title: "Kontakt",
      titleIcon: LocationPinIcon,
      text: "Zavolejte, napište nebo nás navštivte osobně, třeba jen na kávu.",
      button: {
        text: "Kontaktní údaje",
        link: "/"
      }
    },
    {
      title: "Náš příběh",
      titleIcon: UserGroupIcon,
      text: "Seznamte se s naším týmem a zjistěte, proč si vybrat právě naší službu.",
      button: {
        text: "Zjistit více",
        link: "/"
      }
    },
    {
      title: "Reference",
      titleIcon: ThumbsUpIcon,
      text: "Přečtěte si úspěšné případové studie našich klientů  z různých oborů podnikání.",
      button: {
        text: "Zjistit více",
        link: "/"
      }
    },
    {
      title: "Kariéra",
      titleIcon: BriefcaseIcon,
      text: "Neustále hledáme talentované a motivované lidi, kteří s námi budou sdílet vášeň pro inovace a kvalitu.",
      button: {
        text: "Chci se přidat",
        link: "/"
      }
    },
  ]
}

const address = `Lovosická 711/30, 190 00 Praha 9\n <br /> IČ: 01648454,  DIČ: CZ01648454`
</script>

<style scoped>

</style>
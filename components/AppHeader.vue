<template>
  <header class="mx-auto w-full bg-white shadow-[0px_6px_30px_0px_#333C4E12] absolute left-0 pt-[1.375rem] pb-[1.438rem]">
    <div class="container p-0 max-w-content">
      <div class="hidden lg:flex justify-between items-center">
        <div class="flex justify-between items-center space-x-[5.625rem]">
          <div class="text-xl font-bold text-gray-800">
            <img src="~/assets/Logo.png" alt="App Logo">
          </div>

          <nav class="flex items-center space-x-10">
            <div
              v-for="(link, index) in navLinks"
              :key="index"
              class="relative"
            >
              <button
                @click="toggleSubMenu(index)"
                :class="[
                  'font-normal text-lg text-gray-600 hover:bg-brand-blue-10 transition inline-flex items-center px-4 py-2 rounded-[0.313rem]',
                  activeLink === index ? 'bg-brand-blue-10' : ''
                ]"
              >
                {{ link.name }}
                <ChevronDown v-if="link.submenu" class="fill-current w-4 h-4 ml-2" :class="[activeLink === index ? 'rotate-180' : '']" />
              </button>
            </div>
          </nav>
        </div>

        <div class="flex justify-between items-center space-x-10">
          <LangSwitcher />

          <button class='font-normal text-lg text-gray-600 hover:text-brand-blue transition inline-flex items-center'>
            <UserIcon class="fill-current w-4 h-4 mr-[0.938rem]" />
            Přihlásit se
          </button>

          <GButton btn-color="brand-blue" btn-style="filled" btn-text="Vyzkoušet zdarma" />
        </div>
      </div>
    </div>

    <div
      v-if="activeSubMenu !== null"
      class="absolute left-0 top-full w-full bg-white shadow-lg border-t border-dashed border-medium-grey z-50"
    >
      <NavigationProductAndSolutionSubmenu v-if="activeSubMenu === 0" />
      <NavigationAboutUsSubmenu v-if="activeSubMenu === 2" />
      <NavigationSupportSubmenu v-if="activeSubMenu === 3" />
    </div>

    <div class="flex lg:hidden justify-between items-center h-16 px-4">
      <div class="text-xl font-bold text-gray-800">
        <img src="~/assets/Logo.png" alt="App Logo" class="max-w-[5.313rem]">
      </div>

      <GButton btn-text="Vyzkoušet" btn-size="sm" btn-color="brand-blue" btn-style="filled" class="leading-4" />

      <button
        @click="toggleMobileMenu"
        class="text-black focus:outline-none"
      >
        <HamburgerIcon v-if="!isMobileMenuOpen" />
        <CloseIcon v-else />
      </button>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="inset-0 bg-white z-50 flex flex-col"
    >
      <button
        @click="toggleMobileSubMenu(0)"
        class="w-full inline-flex items-center justify-between text-left text-base font-bold text-black border-t border-dashed border-medium-grey px-[1.875rem] py-[1.031rem]"
      >
        {{ navLinks[0].name }}
        <ChevronDown class="fill-current w-4 h-4 ml-2" :class="[activeMobileSubMenu === 0 ? 'rotate-180' : '']" />
      </button>
      <div
        v-if="activeMobileSubMenu !== null"
      >
        <NavigationProductAndSolutionSubmenu v-if="activeMobileSubMenu === 0" />
      </div>
      <button
        class="w-full inline-flex items-center justify-between text-left text-base font-bold text-black border-t border-dashed border-medium-grey px-[1.875rem] py-[1.031rem]"
      >
        {{ navLinks[1].name }}
      </button>
        <button
          @click="toggleMobileSubMenu(2)"
          class="w-full inline-flex items-center justify-between text-left text-base font-bold text-black border-t border-dashed border-medium-grey px-[1.875rem] py-[1.031rem]"
        >
          {{ navLinks[2].name }}
          <ChevronDown class="fill-current w-4 h-4 ml-2" :class="[activeMobileSubMenu === 2 ? 'rotate-180' : '']" />
        </button>
        <div
          v-if="activeMobileSubMenu !== null"
        >
          <NavigationAboutUsSubmenu v-if="activeMobileSubMenu === 2" />
        </div>
        <button
          @click="toggleMobileSubMenu(3)"
          class="w-full inline-flex items-center justify-between text-left text-base font-bold text-black border-t border-dashed border-medium-grey px-[1.875rem] py-[1.031rem]"
        >
          {{ navLinks[3].name }}
          <ChevronDown class="fill-current w-4 h-4 ml-2" :class="[activeMobileSubMenu === 3 ? 'rotate-180' : '']" />
        </button>
        <div
          v-if="activeMobileSubMenu !== null"
        >
          <NavigationSupportSubmenu v-if="activeMobileSubMenu === 3" />
        </div>

      <LangSwitcher class="w-full text-left text-base font-bold text-black border-t border-dashed border-medium-grey pl-[0.7rem] pr-[1.875rem] py-[1.031rem]" />

      <button class='font-normal text-lg text-gray-600 border-t border-dashed border-medium-grey transition inline-flex items-center px-[1.875rem] py-[1.031rem]'>
        <UserIcon class="fill-current w-4 h-4 mr-[0.938rem]" />
        Přihlásit se
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import LangSwitcher from "~/components/LangSwitcher.vue";
import ChevronDown from "assets/icons/chevron-down.vue";
import UserIcon from "assets/icons/user-icon.vue";
import HamburgerIcon from "assets/icons/hamburger-icon.vue";
import CloseIcon from "assets/icons/close-icon.vue";

const activeSubMenu = ref(null);
const activeLink = ref(null);

const isMobileMenuOpen = ref(false);
const activeMobileSubMenu = ref(null);

const navLinks = [
  { name: "Produkt a řešení", submenu: true },
  { name: "Ceník" },
  { name: "O nás", submenu: true },
  { name: "Podpora", submenu: true  },
];

function toggleSubMenu(index) {
  activeSubMenu.value = activeSubMenu.value === index ? null : index;
  activeLink.value = activeLink.value === index ? null : index;
}
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
function toggleMobileSubMenu(index) {
  activeMobileSubMenu.value =
  activeMobileSubMenu.value === index ? null : index;
}
</script>

<style scoped>

</style>
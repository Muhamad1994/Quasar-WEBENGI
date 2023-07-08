<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Fachschaft Wirtschaft </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Navigation Bar </q-item-label>

        <EssentialLink
          v-for="page in essentialLinks"
          :key="page.title"
          v-bind="page"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/NavBar.vue";

const linksList = [
  {
    title: "Anmeldung",
    caption: "Anmeldung für die Ersti-Fahrt",
    icon: "school",
    page: "Ersti",
  },
  {
    title: "News",
    caption: "Neuigkeiten am Wirtschaftsbereich",
    icon: "chat",
    link: "https://twitter.quasar.dev/",
  },
  {
    title: "Kalender",
    caption: "Aktuelle Termine",
    icon: "feed",
    link: "https://chat.quasar.dev/",
  },
  {
    title: "Gallerie",
    caption: "Eindrücke des Fachbereichs Wirtschaft",
    icon: "camera",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Impressum",
    caption: "Autoren der Seite",
    icon: "person",
    link: "https://forum.quasar.dev/",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

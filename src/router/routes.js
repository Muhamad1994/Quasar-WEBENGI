const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "Ersti",
        component: () => import("pages/AnmeldungErstiPage.vue"),
      },
      {
        path: "Anmelden",
        component: () => import("pages/AnmeldungBox.vue"),
      },
      {
        path: "News",
        component: () => import("pages/NewsPage.vue"),
      },
      {
        path: "Kalender",
        component: () => import("pages/KalenderView.vue"),
      },
      {
        path: "Gallerie",
        component: () => import("pages/GalleryView.vue"),
      },
      {
        path: "Impressum",
        component: () => import("pages/ImpressumView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

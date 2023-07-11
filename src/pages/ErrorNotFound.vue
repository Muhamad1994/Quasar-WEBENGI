<template>
  <div
    class="fullscreen bg-indigo-9 text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">Ups..</div>

      <div class="text-h2" style="opacity: 0.4">
        Diese Seite ist nicht mehr Verfügbar.
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>

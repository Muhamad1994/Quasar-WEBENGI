<template>
  <!--Statische Bildergallerie-->
  <div>
    <h2 style="text-align: center">Eindrücke der FH Kiel</h2>
    <div v-for="image in images" :key="image" class="gallery-images">
      <q-img :src="image" :key="image" />
    </div>
    <div class="footer">
      <h3>Hast du noch mehr?</h3>
      <h5>bereichert unsere Fachschaftsgalerie mit euren eigenen Bildern!</h5>
      <q-btn
        class="q-mt-xl"
        color="indigo-9"
        text-color="white"
        to="/Upload"
        label="Hier Hochladen"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        // Die genutzten Bilder wurden heruntergeladen von Unsplash: https://unsplash.com/de/s/fotos/University
        "src/assets/gallery/Campus.jpg",
        "src/assets/gallery/Gebäude.jpg",
        "src/assets/gallery/Bib.jpg",
        "src/assets/gallery/Hörsaal.jpg",
        "src/assets/gallery/Großer Hörsaal.jpg",
        "src/assets/gallery/Arbeitsraum.jpg",
        "src/assets/gallery/Vorlesung.jpg",
        // Hier können händisch mehr Bilder hinzugefügt werden
      ],
    };
  },
};
</script>

<style scoped>
.gallery-images {
  padding-left: 25%;
  max-width: 75%;
  max-height: 75%;
  margin-top: 5x;
  margin-bottom: 5px;
}

.footer {
  text-align: center;
  padding-bottom: 20%;
}
</style>

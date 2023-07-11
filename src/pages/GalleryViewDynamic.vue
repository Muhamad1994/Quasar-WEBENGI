<template>
  <!--Wir hatten Probleme beim Deployen auf Firebase, deshalb nur der Entwurf der Dynamischen Gallerie-->
  <div>
    <h2 style="text-align: center">Eure Einblicke</h2>
    <div class="images">
      <div v-for="image in images" :key="image.id">
        <img :src="image.url" :alt="image.title" />
        <div>{{ image.title }}</div>
        <div>{{ image.description }}</div>
      </div>
    </div>
    <form @submit.prevent="addImage">
      <div>
        <label for="title">Titel</label>
        <input type="text" id="title" v-model="newImage.title" />
      </div>
      <div>
        <label for="description">Beschreibung</label>
        <textarea id="description" v-model="newImage.description"></textarea>
      </div>
      <div>
        <label for="file">Foto</label>
        <input type="file" id="file" @change="onFileChange" />
      </div>
      <button type="submit">Hochladen</button>
    </form>
  </div>
</template>

<script>
/*import { db } from "/firebaseConfig.js";*/
/*import { storage } from "firebase/app"; // Import the storage module from firebase/app*/

export default {
  data() {
    return {
      images: [],
      newImage: {
        title: "",
        description: "",
        file: null,
        url: "",
      },
    };
  },
  mounted() {
    this.loadImages();
  },
  methods: {
    async loadImages() {
      const snapshot = await db.collection("images").get();
      this.images = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },
    onFileChange(event) {
      this.newImage.file = event.target.files[0];
    },
    async addImage() {
      const storageRef = storage().ref(); // Use the storage() function to get the storage reference
      const fileRef = storageRef.child(`images/${this.newImage.file.name}`);
      const snapshot = await fileRef.put(this.newImage.file);
      const url = await snapshot.ref.getDownloadURL();
      const image = {
        title: this.newImage.title,
        description: this.newImage.description,
        url: url,
      };
      await db.collection("images").add(image);
      this.images.push(image);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
}

.alerth2 {
  color: #333;
}

form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>

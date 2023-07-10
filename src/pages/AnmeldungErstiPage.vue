<template>
  <q-page>
    <h2 style="text-align: center">Anmeldung</h2>
    <div>
      <form @submit="sendConfirmation">
        <label for="email">E-mail:</label>
        <input v-model="email" id="email" name="email" required /><br /><br />
        <input type="submit" value="Anmeldung" />
      </form>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },

  methods: {
    sendConfirmation() {
      /*var email = document.getElementById("email").value;*/

      alert("eine Bestätigung wurde an " + this.email + " gesendet");
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

input[type="email"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

/* Optional: Styling für die Bestätigungsnachricht */
.alert {
  margin-top: 20px;
  padding: 10px;
  background-color: #e9f5ea;
  border: 1px solid #acd5ab;
  border-radius: 4px;
  color: #4f8a10;
}
</style>

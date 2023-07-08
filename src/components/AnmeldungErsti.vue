<template>
  <head>
    <title>Anmeldung mit E-mail</title>
  </head>

  <body>
    <h2>Anmeldung</h2>
    <form onsubmit="sendConfirmation(); return false;">
      <label for="email">E-mail:</label>
      <input type="email" id="email" name="email" required /><br /><br />
      <input type="submit" value="Anmeldung" />
    </form>
  </body>
</template>
<script>
function sendConfirmation() {
  var email = document.getElementById("email").value;
  // hier kann der code zum versenden der E-mail eingefügt werden

  alert("eine Bestätigung wurde an" + email + "gesendet");
}
</script>
<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

h2 {
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

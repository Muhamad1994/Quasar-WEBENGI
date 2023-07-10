<template>
  <div class="wrapper">
    <div class="home">
      <!--Inhalt in Anlehnug an die FaWi Seite-->
      <h2 style="text-align: center">Die neue Fachschafts-Seite!</h2>

      <h4>Neuerungen</h4>
      Nicht nur wurde der Webseite ein neues Design verpasst, außerdem findest
      du auf der neuen Fachschafts-Seite ein
      <a href="#/News" style="color: rgba(128, 207, 226, 0.938)">News-Feed</a>
      und eine
      <a href="#/Gallerie" style="color: rgba(128, 207, 226, 0.938)"
        >Gallerie.</a
      >
      hinzugefügt. Außerdem ist es nun möglich sich für die
      <a href="#/Ersti" style="color: rgba(128, 207, 226, 0.938)"
        >Ersti-Fahrt</a
      >
      anzumelden! Den Termin für die Ersti-Fahrt und weitere Termine, finest auf
      dem neuen Reiter
      <a href="#/Kalender" style="color: rgba(128, 207, 226, 0.938)">Kalender</a
      >.
      <div class="image"><img src="~assets/Fachschaft.jpg" /></div>
      <h4>Über uns</h4>
      Die Fachschaftsvertretung ist die offizielle Vertretung der Studierenden
      am Fachbereich. Sie wird einmal pro akademischem Jahr (2 Semester) gewählt
      und fungiert als Bindeglied zwischen den Studierenden, Professoren und dem
      Fachbereich. Da die Fachschaftsvertretung auf basisdemokratischen
      Prinzipien beruht, hat jeder Studierende am Fachbereich Wirtschaft die
      Möglichkeit, sich in der Fachschaftsvertretung zu engagieren. Selbst wenn
      die Wahl nicht erfolgreich ist oder man nur gelegentlich Zeit hat, kann
      man sich gerne als Helfer/in bei uns melden und aktiv am Geschehen
      teilnehmen.
      <h4>Wir helfen bei euren Anliegen</h4>
      <p>
        Wir bieten umfassende Informationen zur Fachhochschule an und geben
        wertvolle Tipps speziell für Erstsemester. Wenn du Schwierigkeiten bei
        der Klausuranmeldung hast, unterstützen wir dich gerne dabei. Außerdem
        freuen wir uns, wenn du Gedächtnisprotokolle von Klausuren erstellst und
        sie mit uns teilst. Ein Pool von Gedächtnisprotokollen ist für andere
        Studierende sehr hilfreich, um sich optimal auf Klausuren vorzubereiten.
        Wir sind die Vermittler zwischen den Studierenden, den Professoren und
        dem Fachbereich. Zögere nicht, uns anzusprechen, wenn du Fragen oder
        Anliegen hast.
      </p>
      <h4>Kontakt</h4>
      <p>
        Falls du Fragen zu uns oder unserer Arbeit hast, besuche uns gerne
        persönlich im Raum 0.12 in C03 jeden Mittwoch und Donnerstag zwischen
        12:00 und 14:00 Uhr. Und wenn wir mal nicht vor Ort sind, kannst du uns
        jederzeit über
        <a
          href=" https://www.instagram.com/fawi_kiel/"
          style="color: rgba(128, 207, 226, 0.938)"
          target="_blank"
          >Instagram</a
        >,
        <!--target="_blank" ruft eine neue Seite auf-->
        <a
          href="https://www.facebook.com/fawi.kiel/"
          style="color: rgba(128, 207, 226, 0.938)"
          target="_blank"
        >
          Facebook </a
        >oder per
        <a
          href="mailto:wirtschaft.fachschaft@fh-kiel.de"
          style="color: rgba(128, 207, 226, 0.938)"
          >Mail.</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(400px, 3);
  grid-gap: 1%;
  padding-top: 2%;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 2%;
}
.home {
  border-radius: 50px;
  padding: 2%;
  grid-column: 4/ 4;
  grid-row: 1 / 4;
  background-color: #152565;
  color: white;
  font-size: 140%;
}

img {
  width: 25%;
  height: auto;
  float: right;
  margin-top: 7%;
  margin-left: 2.5%;
  margin-right: 5%;
}
</style>

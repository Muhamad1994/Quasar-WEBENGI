<template>
  <!DOCTYPE html>
  <html>
    <head>
      <title>Veranstaltungskalender</title>
    </head>
    <body>
      <h1>Veranstaltungskalender</h1>

      <div class="calendar">
        <div class="header">
          <button id="prevButton">&lt;</button>
          <h2 id="monthYear"></h2>
          <button id="nextButton">&gt;</button>
        </div>
        <table id="calendarTable">
          <thead>
            <tr>
              <th>Son</th>
              <th>Mon</th>
              <th>Die</th>
              <th>Mit</th>
              <th>Don</th>
              <th>Fre</th>
              <th>Sam</th>
            </tr>
          </thead>
          <tbody id="calendarBody"></tbody>
        </table>
      </div>
      <div id="eventForm">
        <input type="text" id="eventName" placeholder="Veranstaltungsname" />
        <input type="date" id="eventDate" placeholder="Datum" />
        <button id="addEventButton">Hinzufügen</button>
      </div>
    </body>
  </html>
</template>
<script>
document.addEventListener("DMContentLoaded", function () {
  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var currentYear = currentDate.getFullYear();

  var monthYearElement = document.getElementByID("monthYear");
  var prevButton = document.getEmentById("prevButton");
  var nextButton = document.getElementById("nextButton");
  var calendarBody = document.getElementById("calendarBody");
  var eventNameInput = document.getElementById("eventName");
  var eventDateInput = document.getElementById("eventDate");
  var addEventButton = document.getElementById("addEventButton");
});

prevButton.addEventListener("click", function () {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  renderCalendar();
});

nextButton.addEventListener("click", function () {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = currentMonth === 11;
});
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}
h1,
h2 {
  text-align: center;
}
.calender {
  width: 100%;
  border-collapse: collaps;
}
th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}
th {
  background-color: #eee;
}
.header {
  display: flex;
  justify-content: space-beetween;
  align-items: center;
  margin-bottom: 10px;
}
#eventForm {
  text-align: center;
  margin-bottom: 20px;
}
#addEventButton {
  margin-top: 10pc;
}
</style>

<template>
  <div>
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
            <th>So</th>
            <th>Mo</th>
            <th>Di</th>
            <th>Mi</th>
            <th>Do</th>
            <th>Fr</th>
            <th>Sa</th>
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
  </div>
</template>

<script>
export default {
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      var currentDate = new Date();
      var currentMonth = currentDate.getMonth();
      var currentYear = currentDate.getFullYear();

      var monthYearElement = document.getElementById("monthYear");
      var prevButton = document.getElementById("prevButton");
      var nextButton = document.getElementById("nextButton");
      var calendarBody = document.getElementById("calendarBody");
      var eventNameInput = document.getElementById("eventName");
      var eventDateInput = document.getElementById("eventDate");
      var addEventButton = document.getElementById("addEventButton");

      /*function renderCalendar() {
        var monthYearElement = document.getElementById("monthYear");
        var calendarBody = document.getElementById("calendarBody");

        // Clear the calendar body
        calendarBody.innerHTML = "";

        // Get the first day of the month
        var firstDay = new Date(currentYear, currentMonth, 1);

        // Get the number of days in the month
        var lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Set the month and year in the header
        monthYearElement.textContent = `${currentMonth + 1}/${currentYear}`;

        // Calculate the starting day of the week
        var startDayOfWeek = firstDay.getDay();
        if (startDayOfWeek === 0) {
          startDayOfWeek = 7; // Convert Sunday (0) to 7
        }

        // Create calendar rows and cells
        var row = document.createElement("tr");

        // Add empty cells for previous month's days
        for (var i = 1; i < startDayOfWeek; i++) {
          var cell = document.createElement("td");
          row.appendChild(cell);
        }

        // Populate calendar cells with days of the month
        for (var day = 1; day <= lastDay; day++) {
          var cell = document.createElement("td");
          cell.textContent = day;
          row.appendChild(cell);

          // Start a new row after each 7th day
          if ((day + startDayOfWeek - 1) % 7 === 0) {
            calendarBody.appendChild(row);
            row = document.createElement("tr");
          }
        }

        // Add the remaining cells
        calendarBody.appendChild(row);
      }*/

      /*prevButton.addEventListener("click", function () {
        currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        renderCalendar();
      });*/

      nextButton.addEventListener("click", function () {
        currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        currentMonth = currentMonth === 11 ? 0 : currentMonth + 1;
        renderCalendar();
      });
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
body {
  font-family: "Poppins", sans-serif;
  background-color: #f9f9f9;
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

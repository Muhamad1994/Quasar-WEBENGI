(<!--)
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
(!-->)

<template>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  </head>

  <body>

    <div class="mobile-header z-depth-1">

      <div class="row">
        <div class="col-2">
          <a href="#" data-activates="sidebar" class="button-collapse" style="">
            <i class="material-icons">menu</i>
          </a>
        </div>
        <div class="col">
          <h4>Events</h4>
        </div>
      </div>

    </div>

    <div class="main-wrapper">

      <div class="sidebar-wrapper z-depth-2 side-nav fixed" id="sidebar">

        <div class="sidebar-title">
          <h4>Events</h4>
          <h5 id="eventDayName">Date</h5>
        </div>
        <div class="sidebar-events" id="sidebarEvents">
          <div class="empty-message">Sorry, no events to selected date</div>
        </div>

      </div>

      <div class="content-wrapper grey lighten-3">
        <div class="container">

          <div class="calendar-wrapper z-depth-2">

            <div class="header-background">
              <div class="calendar-header">

                <a class="prev-button" id="prev">
                  <i class="material-icons">keyboard_arrow_left</i>
                </a>
                <a class="next-button" id="next">
                  <i class="material-icons">keyboard_arrow_right</i>
                </a>

                <div class="row header-title">

                  <div class="header-text">
                    <h3 id="month-name">February</h3>
                    <h5 id="todayDayName">Today is Friday 7 Feb</h5>
                  </div>

                </div>
              </div>
            </div>

            <div class="calendar-content">
              <div id="calendar-table" class="calendar-cells">

                <div id="table-header">
                  <div class="row">
                    <div class="col">Mon</div>
                    <div class="col">Tue</div>
                    <div class="col">Wed</div>
                    <div class="col">Thu</div>
                    <div class="col">Fri</div>
                    <div class="col">Sat</div>
                    <div class="col">Sun</div>
                  </div>
                </div>

                <div id="table-body" class="">

                </div>

              </div>
            </div>

            <div class="calendar-footer">
              <div class="emptyForm" id="emptyForm">
                <h4 id="emptyFormTitle">No events now</h4>
                <a class="addEvent" id="changeFormButton">Add new</a>
              </div>
              <div class="addForm" id="addForm">
                <h4>Add new event</h4>

                <div class="row">
                  <div class="input-field col s6">
                    <input id="eventTitleInput" type="text" class="validate">
                    <label for="eventTitleInput">Title</label>
                  </div>
                  <div class="input-field col s6">
                    <input id="eventDescInput" type="text" class="validate">
                    <label for="eventDescInput">Description</label>
                  </div>
                </div>

                <div class="addEventButtons">
                  <a class="waves-effect waves-light btn blue lighten-2" id="addEventButton">Add</a>
                  <a class="waves-effect waves-light btn grey lighten-2" id="cancelAdd">Cancel</a>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
    </template>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ"
            crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script>
      $(".button-collapse").sideNav();
    
    </script>
  


<style>
body {
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
}

h3,h4,h5 {
   font-weight: 300 !important;
}

.calendar-wrapper {
   height: auto;
   max-width: 730px;
   margin: 0 auto;
}

.calendar-header {
   background-color: rgba(18, 15, 25, 0.25);
   height: 100%;
   padding: 20px;
   color: #fff;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   position: relative;
}

.header-title {
   padding-left: 15%;
}

.header-background {
   background-image: url("https://raw.githubusercontent.com/JustMonk/codepen-resource-project/master/img/compressed-header.jpg");
   height: 200px;
   background-position: center right;
   background-size: cover;
}

.calendar-content {
   background-color: #fff;
   padding: 20px;
   padding-left: 15%;
   padding-right: 15%;
   overflow: hidden;
}

.event-mark {
   width: 5px;
   height: 5px;
   background-color: teal;
   border-radius: 100px;
   position: absolute;
   left: 46%;
   top: 70%;
}

.calendar-footer {
   height: 200px;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   text-align: center;
   background-color: #4b6289 !important;
   position: relative;
   overflow: hidden;
}

.addForm {
   position: absolute;
   top: 100%;
   width: 100%;
   height: 100%;
   background-color: #4b5889 !important;
   transition: top 0.5s cubic-bezier(1, 0, 0, 1);
   padding: 0 5px 0 5px;
}

.addForm input {
   color: #fff;
}

.addForm .row {
   padding-left: 0.75rem;
   padding-right: 0.75rem;
   margin-bottom: 0;
}

.addForm h4 {
   color: #fff;
   margin-bottom: 1rem;
}

.addEventButtons {
   text-align: right;
   padding: 0 0.75rem 0 0.75rem;
}

.addEventButtons a {
   color: black;
   font-weight: 300;
}

.emptyForm {
   padding: 20px;
   padding-left: 15%;
   padding-right: 15%;
}

.emptyForm h4 {
   color: #fff;
   margin-bottom: 2rem;
}

.sidebar-wrapper {
   color: #fff;
   background-color: #5a649c !important;
   padding-top: 0;
   padding-bottom: 20px;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
   padding-left: 0;
   padding-right: 0;
}

.sidebar-title {
   padding: 50px 6% 50px 12%;
}

.sidebar-title h4 {
   margin-top: 0;
}

.sidebar-events {
   overflow-x: hidden;
   overflow-y: hidden;
   margin-bottom: 70px;
}

.empty-message {
   font-size: 1.2rem;
   padding: 15px 6% 15px 12%;
}

.eventCard {
   background-color: #fff;
   color: black;
   padding: 12px 24px 12px 24px;
   border-bottom: 1px solid #E5E5E5;
   white-space: nowrap;
   position: relative;
   animation: slideInDown 0.5s;
}

.eventCard-header {
   font-weight: bold;
}

.eventCard-description {
   color: grey;
}

.eventCard-mark-wrapper {
   position: absolute;
   right: 0;
   top: 0;
   height: 100%;
   width: 60px;
   background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%);
}

.eventCard-mark {
   width: 8px;
   height: 8px;
   background-color: #b39ddb;
   border-radius: 100px;
   position: absolute;
   left: 50%;
   top: 45%;
}

.day-mark {
   width: 7px;
   height: 7px;
   background-color: #b39ddb;
   border-radius: 100px;
   position: absolute;
   left: 47%;
   top: 67%;
}

.content-wrapper {
   padding-top: 50px;
   padding-bottom: 50px;
   margin-left: 300px;
}

#table-body .col:hover {
   cursor: pointer;
   /*border: 1px solid grey;*/
   background-color: #E0E0E0;
}

.empty-day:hover {
   cursor: default !important;
   background-color: #fff !important;
}

#table-body .row .col {
   padding: .75rem;
}

#table-body .col {
   border: 1px solid transparent;
}

#table-body {}

#table-body .row {
   margin-bottom: 0;
}

#table-body .col {
   padding-top: 1.3rem !important;
   padding-bottom: 1.3rem !important;
}

#calendar-table {
   text-align: center;
}

.prev-button {
   position: absolute;
   cursor: pointer;
   left: 0%;
   top: 35%;
   color: grey !important;
}

.prev-button i {
   font-size: 4em;
}

.next-button {
   position: absolute;
   cursor: pointer;
   right: 0%;
   top: 35%;
   color: grey !important;
}

.next-button i {
   font-size: 4em;
}

.addEvent {
   box-shadow: 0 5px 15px rgb(57, 168, 228);
   background-color: #39a8e4;
   padding: 10px;
   padding-left: 3em;
   padding-right: 3em;
   cursor: pointer;
   border-radius: 25px;
   color: #fff !important;
   background-image: linear-gradient(135deg, #8d8dd4, #45ced4);
}

.addEvent:hover {
   transition: box-shadow 0.5s;
   box-shadow: 0 4px 25px rgb(57, 168, 228);
}

.mobile-header {
   padding: 0;
   display: none;
   padding-top: 20px;
   padding-bottom: 20px;
   position: fixed;
   z-index: 99;
   width: 100%;
   background-color: #5a649c !important;
}

.mobile-header a i {
   color: #fff;
   font-size: 38px;
}

.mobile-header h4 {
   color: #fff;
}

.mobile-header .row {
   margin-bottom: 0;
}

.mobile-header h4 {
   margin: 0;
   font-family: 'Roboto', sans-serif;
   font-weight: 300;
}

@media (max-width:992px) {
   .content-wrapper {
      margin-left: 0;
   }
   .mobile-header {
      display: block;
   }
   .calendar-wrapper {
      margin-top: 80px;
   }
   .sidebar-wrapper {
      background-color: #EEEEEE !important;
   }
   .sidebar-title {
      background-color: #5A649C !important;
   }
   .empty-message {
      color: black;
   }
}

@media (max-width:767px) {
   .content-wrapper .container {
      width: auto;
   }
   .calendar-content {
      padding-left: 5%;
      padding-right: 5%;
   }
   body .row {
      margin-bottom: 0;
   }
}

@media (max-width:450px) {
   .content-wrapper {
      padding-left: 0;
      padding-right: 0;
   }
   .content-wrapper .container {
      padding-left: 0;
      padding-right: 0;
   }
}
</style>
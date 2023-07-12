<template>
  <div>
    <div class="mobile-header z-depth-1">
      <div class="row">
        <div class="col-2">
          <a href="#" @click="toggleSidebar" class="button-collapse" style="">
            <i class="material-icons">menu</i>
          </a>
        </div>
        <div class="col">
          <h4>Events</h4>
        </div>
      </div>
    </div>

    <div class="main-wrapper">
      <div
        class="sidebar-wrapper z-depth-2 side-nav fixed"
        v-bind:class="{ active: isSidebarOpen }"
        id="sidebar"
      >
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
                <a class="prev-button" @click="previousMonth">
                  <i class="material-icons">keyboard_arrow_left</i>
                </a>
                <a class="next-button" @click="nextMonth">
                  <i class="material-icons">keyboard_arrow_right</i>
                </a>
                <div class="row header-title">
                  <div class="header-text">
                    <h3>{{ currentMonth }}</h3>
                    <h5>Today is {{ today }}</h5>
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

                <div id="table-body">
                  <!-- Calendar cells content -->
                </div>
              </div>
            </div>

            <div class="calendar-footer">
              <div class="emptyForm" id="emptyForm">
                <h4 id="emptyFormTitle">No events now</h4>
                <a class="addEvent" @click="showAddForm">Add new</a>
              </div>
              <div class="addForm" v-show="isAddFormVisible">
                <h4>Add new event</h4>

                <div class="row">
                  <div class="input-field col s6">
                    <input
                      id="eventTitleInput"
                      type="text"
                      class="validate"
                      v-model="eventTitle"
                    />
                    <label for="eventTitleInput">Title</label>
                  </div>
                  <div class="input-field col s6">
                    <input
                      id="eventDescInput"
                      type="text"
                      class="validate"
                      v-model="eventDescription"
                    />
                    <label for="eventDescInput">Description</label>
                  </div>
                </div>

                <div class="addEventButtons">
                  <a
                    class="waves-effect waves-light btn blue lighten-2"
                    @click="addEvent"
                    >Add</a
                  >
                  <a
                    class="waves-effect waves-light btn grey lighten-2"
                    @click="cancelAdd"
                    >Cancel</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      currentMonth: "February",
      today: "Today is Friday 7 Feb",
      isAddFormVisible: false,
      eventTitle: "",
      eventDescription: "",
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    previousMonth() {
      // Logic for going to the previous month
    },
    nextMonth() {
      // Logic for going to the next month
    },
    showAddForm() {
      this.isAddFormVisible = true;
    },
    addEvent() {
      // Logic for adding a new event
    },
    cancelAdd() {
      this.isAddFormVisible = false;
      this.eventTitle = "";
      this.eventDescription = "";
    },
  },
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}

h3,
h4,
h5 {
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
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
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
  font-family: "Roboto", sans-serif;
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
  border-bottom: 1px solid #e5e5e5;
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
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 100%
  );
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
  background-color: #e0e0e0;
}

.empty-day:hover {
  cursor: default !important;
  background-color: #fff !important;
}

#table-body .row .col {
  padding: 0.75rem;
}

#table-body .col {
  border: 1px solid transparent;
}

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
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

@media (max-width: 992px) {
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
    background-color: #eeeeee !important;
  }
  .sidebar-title {
    background-color: #5a649c !important;
  }
  .empty-message {
    color: black;
  }
}

@media (max-width: 767px) {
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

@media (max-width: 450px) {
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

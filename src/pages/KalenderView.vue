<template>
  <div class="calendar" id="calendar-app">
    <div class="calendar--day-view" id="day-view">
      <span class="day-view-exit" id="day-view-exit">&times;</span>
      <span class="day-view-date" id="day-view-date">MAY 29 2016</span>
      <div class="day-view-content">
        <div class="day-highlight">
          You
          <span class="day-events" id="day-events">had no events for today</span
          >. &nbsp;
          <span
            tabindex="0"
            onkeyup="if(event.keyCode != 13) return; this.click();"
            class="day-events-link"
            id="add-event"
            data-date
            >Add a new event?</span
          >
        </div>
        <div class="day-add-event" id="add-day-event-box" data-active="false">
          <div class="row">
            <div class="half">
              <label class="add-event-label">
                Name of event
                <input
                  type="text"
                  class="add-event-edit add-event-edit--long"
                  placeholder="New event"
                  id="input-add-event-name"
                />
              </label>
            </div>
            <div class="qtr">
              <label class="add-event-label">
                Start Time
                <input
                  type="text"
                  class="add-event-edit"
                  placeholder="8:15"
                  id="input-add-event-start-time"
                  data-options="1,2,3,4,5,6,7,8,9,10,11,12"
                  data-format="datetime"
                />
                <input
                  type="text"
                  class="add-event-edit"
                  placeholder="am"
                  id="input-add-event-start-ampm"
                  data-options="a,p,am,pm"
                />
              </label>
            </div>
            <div class="qtr">
              <label class="add-event-label">
                End Time
                <input
                  type="text"
                  class="add-event-edit"
                  placeholder="9"
                  id="input-add-event-end-time"
                  data-options="1,2,3,4,5,6,7,8,9,10,11,12"
                  data-format="datetime"
                />
                <input
                  type="text"
                  class="add-event-edit"
                  placeholder="am"
                  id="input-add-event-end-ampm"
                  data-options="a,p,am,pm"
                />
              </label>
            </div>
            <div class="half">
              <a
                onkeyup="if(event.keyCode != 13) return; this.click();"
                tabindex="0"
                id="add-event-save"
                class="event-btn--save event-btn"
                >save</a
              >
              <a
                tabindex="0"
                id="add-event-cancel"
                class="event-btn--cancel event-btn"
                >cancel</a
              >
            </div>
          </div>
        </div>
        <div id="day-events-list" class="day-events-list"></div>
      </div>
    </div>
    <div class="calendar--view" id="calendar-view">
      <div class="cview__month">
        <span class="cview__month-last" id="calendar-month-last">Apr</span>
        <span class="cview__month-current" id="calendar-month">May</span>
        <span class="cview__month-next" id="calendar-month-next">Jun</span>
      </div>
      <div class="cview__header">Sun</div>
      <div class="cview__header">Mon</div>
      <div class="cview__header">Tue</div>
      <div class="cview__header">Wed</div>
      <div class="cview__header">Thu</div>
      <div class="cview__header">Fri</div>
      <div class="cview__header">Sat</div>
      <div class="calendar--view" id="dates"></div>
    </div>
    <div class="footer">
      <span
        ><span id="footer-date" class="footer__link"
          >Today is May 30</span
        ></span
      >
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: "HelveticaNeue-Light", Helvetica Neue, Helvetica;
  display: flex;
  align-items: center;
  height: 100%;
  height: 100vh;
  min-height: 500px;
  background: rgba(76, 76, 76, 1);
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(76, 76, 76, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(23, 23, 23, 1) 91%,
    rgba(23, 23, 23, 1) 100%
  );
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(76, 76, 76, 1)),
    color-stop(0%, rgba(43, 43, 43, 1)),
    color-stop(91%, rgba(23, 23, 23, 1)),
    color-stop(100%, rgba(23, 23, 23, 1))
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(76, 76, 76, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(23, 23, 23, 1) 91%,
    rgba(23, 23, 23, 1) 100%
  );
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(76, 76, 76, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(23, 23, 23, 1) 91%,
    rgba(23, 23, 23, 1) 100%
  );
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(76, 76, 76, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(23, 23, 23, 1) 91%,
    rgba(23, 23, 23, 1) 100%
  );
  background: radial-gradient(
    ellipse at center,
    rgba(76, 76, 76, 1) 0%,
    rgba(43, 43, 43, 1) 0%,
    rgba(23, 23, 23, 1) 91%,
    rgba(23, 23, 23, 1) 100%
  );
}
.calendar {
  color: #fff;
  margin: 10px auto;
  background: #04b6e2;
  padding: 60px 40px 80px 40px;
  width: 95%;
  max-width: 600px;
  height: 325px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(2, 2, 2, 0.2);
  position: relative;
}
.calendar__title {
  text-align: center;
}
.calendar--day-view {
  position: absolute;
  border-radius: 3px;
  top: -2.5%;
  left: -2.5%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  box-shadow: 3px 12px 5px rgba(2, 2, 2, 0.16);
  z-index: 2;
  overflow: hidden;
  transform: scale(0.9) translate(30px, 30px);
  opacity: 0;
  visibility: hidden;
  /*   border-radius: 5px; */
  display: none;
  align-items: flex-start;
  flex-wrap: wrap;
}
.day-view-content {
  color: #222;
  width: 100%;
  padding-top: 55px;
}
.day-highlight,
.day-add-event {
  padding: 8px 10px;
  margin: 12px 15px;
  border-radius: 4px;
  background: #e7e8e8;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  font-family: "Avenir", sans-serif;
}
.row {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.row .qtr {
  width: 40%;
}
.row .half {
  width: 100%;
}
@media (min-width: 800px) {
  .row {
    flex-wrap: nowrap;
  }
  .row .half {
    width: 35%;
  }
  .row .qtr {
    width: 25%;
  }
}

.day-add-event {
  background: #04b6e2;
  color: #fff;
  padding: 16px;
  display: none;
  transform: translateY(-15px);
  opacity: 0;
}
.day-add-event[data-active="true"] {
  display: block;
  animation: popIn 250ms 1 forwards;
}
.add-event-label {
  padding: 10px 0;
  font-size: 18px;
  font-family: "Avenir", sans-serif;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.add-event-edit {
  display: block;
  margin: 4px 0;
  max-width: 70%;
  border-bottom: 2px solid #fff;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
}
.add-event-edit--long {
  max-width: 90%;
}

input.add-event-edit {
  border: none;
  border-bottom: 2px solid #fff;
  background: transparent;
  outline: none;
  font: inherit;
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}
.add-event-edit--error,
input.add-event-edit--error {
  border-color: #ff5151;
  animation: shake 300ms 1 forwards;
}
@keyframes shake {
  20%,
  60% {
    transform: translateX(4px);
  }
  40%,
  80% {
    transform: translateX(-4px);
  }
}
input.add-event-edit::-webkit-input-placeholder {
  color: #fff;
}

input.add-event-edit:-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}

input.add-event-edit::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}

input.add-event-edit:-ms-input-placeholder {
  color: #fff;
}
.event-btn {
  padding: 3px 8px;
  border: 3px solid #fff;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  width: 65px;
  margin: 5px 0;
  text-align: center;
}

.event-btn--save {
  border-color: #fff;
  background: #74c500;
  color: #fff;
  border-color: transparent;
}
.event-btn--save:hover {
  box-shadow: 0px 2px 4px rgba(2, 2, 2, 0.2);
}
.event-btn--cancel {
  background: #ff5151;
  color: #fff;
  border-color: transparent;
}
.event-btn--cancel:hover {
  box-shadow: 0px 2px 4px rgba(2, 2, 2, 0.2);
}
/* .add-event-btn:hover, .add.event-btn:focus{
  background: #00258e;
  box-shadow: 0px -1px 2px rgba(3,2,2,0.2);
} */
.day-highlight .day-events-link {
  border-bottom: 2px solid #222;
  padding: 0;
  cursor: pointer;
}
#add-event {
  color: #04b6e2;
  border-color: #04b6e2;
}
.day-view-exit {
  position: absolute;
  top: 24px;
  line-height: 1em;
  left: 22px;
  font-size: 22px;
  color: #252525;
  font-family: "Avenir", sans-serif;
  font-weight: 800;
  cursor: pointer;
  opacity: 0;
  animation: popIn 200ms 1 forwards;
  text-transform: uppercase;
}
.day-view-date {
  position: absolute;
  top: 19px;
  right: 22px;
  text-align: right;
  font-size: 22px;
  font-family: "Avenir", sans-serif;
  font-weight: 800;
  color: #393939;
  border-bottom: 2px solid #222;
  cursor: pointer;
}
.day-inspiration-quote {
  position: absolute;
  /*   top: 90px; */
  margin-top: -40px;
  left: 10%;
  width: 80%;
  height: calc(100% - 110px);
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -1px;
  color: #ddd;
  line-height: 1.1em;
  font-family: "Avenir", sans-serif;
  z-index: -1;
}
.day-event-list-ul {
  list-style: none;
  margin: auto;
  width: 95%;
  padding: 0;
  max-height: 300px;
  overflow: auto;
}
.day-event-list-ul li {
  padding: 10px;
  margin: 10px 0;
  /*   background: #04b6e2; */
  /*   box-shadow: 0px 1px 1px  rgba(2,2,2,0.5); */
  position: relative;
}
.event-dates small {
  font-size: 0.65em;
  color: #444;
}
.event-dates {
  font-weight: 800;
  font-family: "Avenir", sans-serif;
  color: #04b6e2;
  font-size: 18px;
  text-transform: lowercase;
  /*   position: relative; */
}
.event-delete {
  position: absolute;
  right: 10px;
  top: 0px;
  font-size: 12px;
  color: #f25656;
  cursor: pointer;
}
.event-name {
  font-size: 19px;
  font-family: "Avenir", sans-serif;
  color: #222;
  padding: 10px;
  background: #f7f7f7;
  margin: 2px 0;
  display: block;
  text-transform: initial;
}
.calendar--day-view-active {
  animation: popIn 200ms 1 forwards;
  visibility: visible;
  display: flex;
  transition: visibility 0ms;
}
.calendar--view {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  width: 100%;
}
.cview__month {
  width: 100%;
  text-align: center;
  font-weight: 800;
  font-size: 22px;
  font-family: "Avenir", sans-serif;
  padding-bottom: 20px;
  color: #222;
  text-transform: uppercase;
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-around;
}
.cview__month-last,
.cview__month-next,
.cview__month-current {
  width: 33.33333%;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  color: #222;
}
.cview__month-last:hover,
.cview__month-next:hover {
  color: #fff;
}

.cview__month-current {
  font-size: 22px;
  cursor: default;
  animation: popIn 200ms 1 forwards;
  transform: translateY(20px);
  opacity: 0;
  position: relative;
}
.cview__month-reset {
  animation: none;
}
.cview__month-activate {
  animation: popIn 100ms 1 forwards;
}
.cview--spacer,
.cview__header,
.cview--date {
  width: 14.28571428571429%;
  max-width: 14.28571428571429%;
  padding: 10px;
  box-sizing: border-box;
  position: relative;
  text-align: center;
  overflow: hidden;
  text-overflow: clip;
  font-size: 14px;
  font-weight: 900;
}
.cview--date {
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}
.has-events::after {
  border-radius: 100%;
  animation: popIn 200ms 1 forwards;
  background: rgba(255, 255, 255, 0.95);
  transform: scale(0);
  content: "";
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  top: 8px;
  left: 12px;
}
.cview--date:hover::before {
  background: rgba(255, 255, 255, 0.2);
}
.cview--date.today {
  color: #111;
}
.cview--date.today::before {
  animation: popIn 200ms 1 forwards;
  background: rgba(255, 255, 255, 0.2);
  transform: scale(0);
}
@keyframes popIn {
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.cview--date::before {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  transform: scale(0.8);
  z-index: 0;
}
.footer {
  width: 100%;
  bottom: 50px;
  left: 0;
  position: absolute;
  font-size: 14px;
  text-align: center;
}
.footer__link {
  cursor: pointer;
  padding: 2px 5px;
  border-bottom: 1px solid #fff;
}
</style>

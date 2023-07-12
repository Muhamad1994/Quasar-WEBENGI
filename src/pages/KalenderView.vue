<template>
  <div class="calendar">
    <div class="header">
      <button @click="previousMonth">&lt;</button>
      <h2>{{ monthName }} {{ year }}</h2>
      <button @click="nextMonth">&gt;</button>
    </div>
    <div class="days">
      <div class="day" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
    </div>
    <div class="cells">
      <div
        class="cell"
        v-for="cell in calendarCells"
        :key="cell.date"
        :class="{ 'current-day': isCurrentDay(cell.date) }"
      >
        {{ cell.date.getDate() }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
      daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  computed: {
    year() {
      return this.currentDate.getFullYear();
    },
    month() {
      return this.currentDate.getMonth();
    },
    monthName() {
      const options = { month: "long" };
      return this.currentDate.toLocaleString("en-US", options);
    },
    calendarCells() {
      const firstDay = new Date(this.year, this.month, 1);
      const lastDay = new Date(this.year, this.month + 1, 0);
      const numDays = lastDay.getDate();
      const startOffset = firstDay.getDay();

      const cells = [];

      for (let i = 0; i < startOffset; i++) {
        cells.push({ date: null });
      }

      for (let i = 1; i <= numDays; i++) {
        const date = new Date(this.year, this.month, i);
        cells.push({ date });
      }

      return cells;
    },
  },
  methods: {
    previousMonth() {
      this.currentDate = new Date(this.year, this.month - 1, 1);
    },
    nextMonth() {
      this.currentDate = new Date(this.year, this.month + 1, 1);
    },
    isCurrentDay(date) {
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
  },
};
</script>

<style scoped>
.calendar {
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.days {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.day {
  width: 30px;
  text-align: center;
  padding: 5px;
}

.cells {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
}

.cell {
  border: 1px solid #ccc;
  text-align: center;
  padding: 5px;
}

.current-day {
  background-color: #e0e0e0;
}
</style>

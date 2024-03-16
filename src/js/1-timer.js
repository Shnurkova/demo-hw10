import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const inputCalendar = document.querySelector('#datetime-picker')
const startBtn = document.querySelector('[data-start]');
const showTime = document.querySelectorAll('.value'); 
let userSelectedDate;


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      userSelectedDate = selectedDates[0];
      if (selectedDates < 1) {
          window.alert("Please choose a date in the future");
      } else {
          startBtn.isActive();
      }
  },
};

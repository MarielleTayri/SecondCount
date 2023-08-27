document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("2023-04-20T15:55:00");
  const timeElements = {
    months: document.getElementById("months"),
    weeks: document.getElementById("weeks"),
    days: document.getElementById("days"),
    hours: document.getElementById("hours"),
    minutes: document.getElementById("minutes"),
    seconds: document.getElementById("seconds")
  };
  const messageElement = document.getElementById("message");

  const updateCounter = () => {
    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate - targetDate) / 1000);

    const months = Math.floor(timeDifference / (30 * 24 * 60 * 60));
    const weeks = Math.floor((timeDifference % (30 * 24 * 60 * 60)) / (7 * 24 * 60 * 60));
    const days = Math.floor((timeDifference % (7 * 24 * 60 * 60)) / (24 * 60 * 60));
    const hours = Math.floor((timeDifference % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeDifference % (60 * 60)) / 60);
    const seconds = timeDifference % 60;

    timeElements.months.textContent = months + " Months";
    timeElements.weeks.textContent = weeks + " Weeks";
    timeElements.days.textContent = days + " Days";
    timeElements.hours.textContent = hours + " Hours";
    timeElements.minutes.textContent = minutes + " Minutes";
    timeElements.seconds.textContent = seconds + " Seconds";

    messageElement.textContent = `which makes a total of ${timeDifference} seconds`;
  };

  updateCounter();
  setInterval(updateCounter, 1000);
});

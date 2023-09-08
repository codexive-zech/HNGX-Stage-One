// JavaScript code to update the current day of the week and UTC time
function updateData() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const utcTime = currentDate.toISOString().substr(11, 8);

  document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  ).textContent = `Day of The Week: ${dayOfWeek}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${utcTime}`;
}

// Update the data on page load
updateData();

// Update the data every second (for real-time UTC time)
setInterval(updateData, 1000);

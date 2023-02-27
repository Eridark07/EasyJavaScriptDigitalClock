// This function gets and the date
function getDate() {
  // Create a Date() instance
  const date = new Date();
  // Get only what we need
  let fDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  fDate = fDate.toLocaleString();
  const pText = document.getElementById("pText");
  pText.textContent = fDate;
}

// Update the date every second
setInterval(getDate, 1000);
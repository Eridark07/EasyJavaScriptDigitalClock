function updateDate() {
    const date = new Date();
    let fDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    fDate = fDate.toLocaleString();
    const pText = document.getElementById("pText");
    pText.textContent = fDate;
  }
  
// Update the date every second
setInterval(updateDate, 1000);
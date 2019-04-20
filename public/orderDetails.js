function validateForm() {
  var x = document.forms["orderForm"]["duration"].value;

  const maxDurationArray = document.forms["orderForm"]["max_duration"];
  let totalDuration = 0;
  for (let i = 0; i < maxDurationArray.length; i++) {
    let intMaxDuration = parseInt(maxDurationArray[i].value);
    totalDuration = totalDuration + intMaxDuration;
  }
  const duration = document.forms["orderForm"]["duration"].value;
  const intDuration = parseInt(duration);

  if (totalDuration > (duration * 40)) {
    alert("NOTE: Your total game duration is more than rented duration.");
  }
}

//const duration = document.forms["orderForm"]["duration"].value;
const orderButton = document.getElementById("order-button");
orderButton.addEventListener("click", validateForm);
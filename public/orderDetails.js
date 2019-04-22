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

  if (totalDuration > (duration * 60)) {
    alert("NOTE: Your total game duration is more than rented duration.");
  }

  $.ajax({
  type: “POST”,
  url: “https://mandrillapp.com/api/1.0/messages/send.json”,
  data: {
    ‘key’: ‘NWxS4HkE9C1KmZHaDsFzeQ’,
    ‘message’: {
      ‘from_email’: ‘sitiherdanuryani@gmail.com’,
      ‘to’: [
          {
            ‘email’: ‘herda58@gmail.com’,
            ‘name’: ‘Herda’,
            ‘type’: ‘to’
          },
        ],
      ‘autotext’: ‘true’,
      ‘subject’: ‘This is a test’,
      ‘html’: ‘YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!’
    }
  }
 }).done(function(response) {
   console.log(response); // if you're into that sorta thing
 });
}

//const duration = document.forms["orderForm"]["duration"].value;
const orderButton = document.getElementById("order-button");
orderButton.addEventListener("click", validateForm);
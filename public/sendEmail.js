$('#order-button').click(function() {
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
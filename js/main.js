function validateEmail(email) { 
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
} 

$(document).ready(function(){
  $('.btn-submit').click( function(evt){
    email = $('#email').val()
    if(validateEmail(email)) {
      $.ajax({
        type: 'POST',
        crossDomain: true,
        url: 'http://www.zuoyouba.com/sub_emails',
        data: { "email" : email } ,
        dataType: 'json',
        success: function(responseData, textStatus, jqXHR) {
          var value = responseData.someKey;
        },
        error: function() {
          $('#email').val("")
          $('.alert').removeClass('hide')
        }
      });
    }
  });
});
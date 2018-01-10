$(document).ready(function () {
  var $validEmail = $('#email');
  var $validPassword = $('#password');
  var $submit = $('#submit');

  $validEmail.on('input', function(event) {
    if($(this).val() === localStorage.email){

    }
  });
  $validPassword.on('input', function(event) {
    if($(this).val() === localStorage.password);
  });

  $submit.on('click', function(){
    if($validEmail.val() === localStorage.email && $validPassword.val() === localStorage.password) {
      window.location.href = '../views/comunidad.html';
    } else {
      window.location.href = '../views/sign-up.html';
    }
  })
});

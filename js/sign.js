$(document).ready(function () {
  
    var $validName = $('#user');
    var $validLastName = $('#lastuser');
    var $validEmail = $('#email');
    var $validPassword = $('#password');
    var $validPasswordConfir = $('#password2');
    var $checkBox = $('#check');
    var $submit = $('#signup');

    // creando variables de verificación
    var $verifyEmail = false;
    var $verifyPassword = false;
    var $verifyCheck = false;
    // activando boton  signup
    function buttonActi () {
      if( $verifyEmail && $verifyPassword && $verifyCheck) {
        $submit.attr('disabled',false);
      }
    }

    // desactivando boton signup
    function buttondesacti () {
      $submit.attr('disabled', true);
    }

    $validName.on('input', function(event){
      $(this).val();
      var patternName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
      if(patternName.test($(this).val())) {
        $verifyEmail = true;
        buttonActi();
      } else {
        buttondesacti();
      }
    });

    $validLastName.on('input', function(event){
      $(this).val();
      var patternLastName = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
      if(patternLastName.test($(this).val())) {
        $verifyEmail = true;
        buttonActi();
      } else {
        buttondesacti();
      }
    });
    // validando email
    $validEmail.on('input', function(event){
      $(this).val();
      var patternEmail = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
      if(patternEmail.test($(this).val())) {
        $verifyEmail = true;
        buttonActi();
      } else {
        buttondesacti();
      }
    });
    // validando password
    $validPassword.on('input', function(event){
      $(this).val();
      if($(this).val().length >= 6) {
        $verifyPassword = true;
        buttonActi();
      } else {
        buttondesacti();
      }
    });

    $validPasswordConfir.on('input', function(event){
      if($validPassword == $validPasswordConfir) {
        buttonActi();
      } else {
        buttondesacti();
      }
    });
    // validando check
    $checkBox.on('click', function(event) {
      if(event.target.checked) {
        $verifyCheck = true;
        buttonActi();
      } else {
        buttondesacti();
      }
    });
    // direcionandoe al perfil
    $("#signup").click(function () {
      window.location.href = 'perfil.html';
  });

});
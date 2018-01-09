$(document).ready(function () {
  
    var $validName = $('#user');
    var $validLastName = $('#lastuser');
    var $validEmail = $('#email');
    var $validPassword = $('#password');
    var $validPasswordConfir = $('#password2');
    var $checkBox = $('#check');
    var $submit = $('#signup');

    // validando nombre
    

    // creando variables de verificación
    var $verifyName = false;
    var $verifyLastName = false;
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

    //validando campo de solo caracteres

    $validName.on('input', function(event){
      $(this).val();
      var pattern = /^[a-zA-Z]*$/;
      if(pattern.test($(this).val())) {
        $verifyName = true;
        buttonActi();
      } else {
        $verifyName = false;
        buttondesacti();
      }
    });

    $validLastName.on('input', function(event){
      $(this).val();
      var pattern = /^[a-zA-Z]*$/;
      if(pattern.test($(this).val())) {
        $verifyLastName = true;
        buttonActi();
      } else {
        $verifyLastName = false;
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
        $verifyEmail = false;
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
        $verifyPassword = false;
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
        $verifyCheck = false;
        buttondesacti();
      }
    });
    // aplicando localStore
    $submit.on('click', function(event) {
      event.preventDefault();
      localStorage.email =$validEmail.val();
      localStorage.password =$validPassword.val();
      window.location.href = '../views/login.html';

    })
    console.log(localStorage.prueba = 'hola1');
    // direcionandoe al perfil
  //   $("#signup").click(function () {
  //     window.location.href = 'perfil.html';
  // });

  
});
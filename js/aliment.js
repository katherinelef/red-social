$(document).ready(function() {
  var $picture = $('#aliment');
  function show(event) {
    for (i = 0; i < data.length; i++) {
      $picture.append('<div class="col-xs-12 col-sm-4"><div class="card-grid "><div class="front "><img class="img-responsive" src=' + data[i].img + '></div>' + '<div class="back"><p>' + data[i].description + '</p></div></div></div></div>');
    }
  }
  show();
  $('.card-grid').flip({trigger:'hover'});

  // evento para eventos.html
  $('.container-fluid img').each(function(contador) {
    $(this).delay((contador)*500).fadeTo(1000,1);
  })
});
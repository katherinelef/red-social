$(document).ready(function() {
  var button = $('#button');
  button.click(function addText() {
    var textArea = document.getElementById('text').value;
    var container = document.createElement('div');
    var message = document.createElement('p');
    var date = new Date();
    var content = document.createTextNode(textArea + ' ' + date.getHours() + ':' + date.getMinutes());
    var main = document.getElementById('box-image');
    container.appendChild(message);
    message.appendChild(content);
    message.classList.add('message');
    main.appendChild(message);
    document.getElementById('text').value = '';
    document.getElementById('text').focus();
  });
  var textArea = $('#text');
  textArea.keyup(function() {
    var com = $(this).val();
    localStorage.setItem('nombre', com);
  });
});

function archivo(evt) {
  var files = evt.target.files;
  for (var i = 0, f; f = files[i]; i++) {
    if (!f.type.match('image.*')) {
      continue;
    }
    var reader = new FileReader();
    reader.onload = (function(theFile) {
      return function(e) {
  // Creamos la imagen.
        document.getElementById("list").innerHTML = ['<img class="subir-fotos" src="', e.target.result,'" title="', escape(theFile.name), '"/>'].join('');
      };
    })(f);
    reader.readAsDataURL(f);
  }
}
document.getElementById('files').addEventListener('change', archivo, false);

window.onload = function () {
//evento para agregar el mensaje escrito//
var button = document.getElementById("button");
  button.addEventListener("click", addText);
//evento para agregar contador de letras//
var textArea = document.getElementById("text");
  textArea.addEventListener("keyup", addAccount);
};

//creando funcion para addText//
function addText() {
  var length = document.getElementById("text").value.length;
    if (length>"0" & length<="140"){
      var textArea = document.getElementById("text").value;
      var container = document.createElement("div");
      var message= document.createElement("p");
      var date = new Date();
      var content = document.createTextNode(textArea +" "+ date.getHours()+":"+date.getMinutes());//añadir hora//
      var main = document.getElementById("box-image")
        container.appendChild(message);
        message.appendChild(content);
        message.classList.add ("message");
        main.appendChild(message);
        document.getElementById("text").value="";//borrar mensaje escrito en el input //
        document.getElementById("contador").value="140";
        document.getElementById("contador").style.color="black";
        document.getElementById('text').focus();
      }
  };

//creando funcion para addAccount//
function addAccount (){
  var max = "140";
  var message = document.getElementById("text").value;
  var longitud = message.length;
  var contador=document.getElementById("contador");
    //cambiar el color del contador si cambia la longitud del texto//
    if(longitud>="0" & longitud<"120"){
      contador.style.color="black";
      contador.value = max-longitud;
    }
    else if(longitud>="120" & longitud<"130"){
      contador.style.color="red";
      contador.value = max-longitud;
    }
    else if(longitud>="130" & longitud<="140"){
      contador.style.color="green";
      contador.value = max-longitud;
    }
    else if(longitud>"140"){
      contador.value =("-"+(longitud-max));
    }
};

//ubicando el focus en el  textArea//
document.getElementById('text').focus();

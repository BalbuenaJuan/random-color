
function numeroAleatorio (minimo, maximo)
{
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}


function inicio()
{
    document.getElementById("boton");
    boton.addEventListener("click", cambiar);
}

function cambiar()
{
     var x = numeroAleatorio(0,5);
     var lista = ["#f00", "#ccc", "#666", "#000","#aaa", "#bbc"];
     var divicito = document.getElementById("body");
     divicito.style.backgroundColor = lista[x];
     console.log("Funciona");

}
var setaesquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var Samantha = window.document.getElementById("Samantha")
var setadireita = window.document.getElementById("setadireita")

function RolarParaDireita (){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Samantha.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex"
}

function RolarParaEsquerda (){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    setadireita.style = "display:flex"
    setaesquerda.style = "display:none"
}
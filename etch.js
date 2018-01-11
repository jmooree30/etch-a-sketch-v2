let n=10;
let boxSize = 500/n
let boxWidth = 500/n*n;

document.querySelector(".container").style.width = boxWidth;

function grid(){
  for(var i = 1; i < n; i++) {
    document.getElementById('container').innerHTML+='<div class="row">'

    for(k = 0; k < n; k++) {
     document.getElementById('container').innerHTML+='<span id="gridsquare" class="gridsquare"></span>'; 
   } 
 }
  buttonListen()
  squareSize()
  hover()
}

function squareSize(){
  let size = document.querySelectorAll(".gridsquare");
  size.forEach(function(spanEl){
    spanEl.style.height = boxSize;
    spanEl.style.width = boxSize;
    spanEl.style.display = 'inline-block';
  });
}

function hover(){ 
  let hover = document.querySelectorAll(".gridsquare");
  for (i=0;i<hover.length;i++){
    hover[i].addEventListener("mouseenter", function(each) { 
      each.target.style.background = "purple";
    });
  }
}

function clearGrid(){
  let hover = document.querySelectorAll(".gridsquare");
  let density = window.prompt("Enter pixel density 1-100")
  let n = density
  for (i=0;i<hover.length;i++){
    hover[i].style.background = "white";
  }
}

function buttonListen(){
  let button = document.querySelector("button");
  button.addEventListener("click", clearGrid);
}
grid()
var clicked=false;
var resized=false;
function myClickFunction() {
  if(!clicked){
    document.getElementById('event3').innerHTML="Click Event";
    clicked=true;
  }
  else{
    document.getElementById('event3').innerHTML="Load Event";
    clicked=false;
  }
}
function myOverFunction() {
  document.getElementById('event3').innerHTML="MouseOver Event";
}
function myOutFunction() {
  document.getElementById('event3').innerHTML="Load Event";
}
function myresizeFunction(){
  if(!resized){
    document.getElementById('event3').innerHTML="Resize Event";
    resized=true;
  }
  else {
    document.getElementById('event3').innerHTML="Load Event";
    resized=false;
  }
}

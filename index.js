//sets counter amt
document.getElementById("count-el").innerHTML = 0;
let count = 0;
function increment(){
    count = count + 1;
    document.getElementById("count-el").innerHTML = count;
}
let entry = document.getElementById("entries").innerHTML;
function save(){
    entry = entry + count + " - ";
    document.getElementById("entries").innerHTML = entry;
}
document.getElementById("count-el").innerHTML = 0;


function clear_history(){
  entry = "Previous entries: ";
  document.getElementById("entries").innerHTML = entry;
}
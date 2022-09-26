let slider = document.getElementById("myRange");
let output = document.getElementById("price");
let outputViews = document.getElementById("views");
output.innerHTML = '$' + slider.value;

slider.oninput = function() {
  output.innerHTML = '$' + this.value;
  // outputViews.innerHTML = 
}
let slider = document.getElementById("myRange");
let output = document.getElementById("price");
let outputViews = document.getElementById("views");
output.innerHTML = '$' + parseFloat(slider.value).toFixed(2);

slider.oninput = function() {
  output.innerHTML = '$' + parseFloat(this.value).toFixed(2);
  // outputViews.innerHTML = 
}
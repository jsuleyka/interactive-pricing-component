let slider = document.getElementById("myRange");
let output = document.getElementById("price-xs");
let output2 = document.getElementById("price-lg");
let outputViews = document.getElementById("views");
output.innerHTML = '$' + parseFloat(slider.value).toFixed(2);
output2.innerHTML = '$' + parseFloat(slider.value).toFixed(2);

slider.oninput = function() {
  output.innerHTML = '$' + parseFloat(this.value).toFixed(2);
  output2.innerHTML = '$' + parseFloat(this.value).toFixed(2);
  // outputViews.innerHTML = 
}
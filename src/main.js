let slider = document.getElementById("myRange"), valSlider = slider.value ;
let output = document.getElementById("price-xs");
let output2 = document.getElementById("price-lg");
let outputViews = document.getElementById("views");
let inputCheck = document.getElementById("check"), isChecked = false, discount = 0;

output.innerHTML = '$' + parseFloat(valSlider).toFixed(2);
output2.innerHTML = '$' + parseFloat(valSlider).toFixed(2);
console.log(isChecked);

inputCheck.addEventListener("click", (e) => {
  isChecked = inputCheck.checked;
  console.log(isChecked);
});

slider.oninput = function() {
  let newVal = this.value;
  discount = newVal - ((25 / 100) * newVal);
  console.log(discount);

  if (isChecked === true) {
    console.log("Check true");
    output.innerHTML = '$' + parseFloat(discount).toFixed(2);
    output2.innerHTML = '$' + parseFloat(discount).toFixed(2);
  } else {
    output.innerHTML = '$' + parseFloat(newVal).toFixed(2);
    output2.innerHTML = '$' + parseFloat(newVal).toFixed(2);
  // outputViews.innerHTML = 
  }
  
}
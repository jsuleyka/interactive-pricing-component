import {valStep, discount} from './data.js';

let slider = document.getElementById("myRange");
let outputPriceXs = document.getElementById("price-xs");
let outputPriceLg = document.getElementById("price-lg");
let outputViews = document.getElementById("views");
let inputCheck = document.getElementById("check"), isChecked = false, applyDiscount = 0;
let keys = [], views = [];

valStep.forEach(item => {
	keys.push(Object.keys(item));
  views.push(Object.values(item));
});

outputPriceXs.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);
outputPriceLg.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);

inputCheck.addEventListener("click", (e) => {
  isChecked = inputCheck.checked;
});

slider.oninput = function(){
  const valueSlider = keys.flat();
  // let sliderStep = valStep[this.value];
  let sliderStep = valueSlider[this.value];

  applyDiscount = sliderStep - ((discount[0] / 100) * sliderStep);

  if (isChecked === true) {
    outputPriceXs.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
    outputPriceLg.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
  } else {
    outputPriceXs.innerHTML = '$' + parseFloat(sliderStep).toFixed(2);
    outputPriceLg.innerHTML = '$' + parseFloat(sliderStep).toFixed(2);
  }
  outputViews.innerHTML = views[this.value];
}
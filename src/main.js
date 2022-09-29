import {valStep, discount} from './data.js';

let slider = document.getElementById("myRange");
let outputPriceXs = document.getElementById("price-xs");
let outputPriceLg = document.getElementById("price-lg");
let outputViewsXs = document.getElementById("views-xs");
let outputViewsLg = document.getElementById("views-lg");
let outputDiscountXs = document.getElementById("discount-xs");
let outputDiscountLg = document.getElementById("discount-lg");
let inputCheck = document.getElementById("check"), isChecked = false, applyDiscount = 0;
let keys = [], views = [];

valStep.forEach(item => {
	keys.push(Object.keys(item));
  views.push(Object.values(item));
});

outputPriceXs.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);
outputPriceLg.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);
outputDiscountXs.innerHTML = '-' + discount[0] + '%';
outputDiscountLg.innerHTML = discount[0] + '% discount';
applyDiscount = keys[3] - ((discount[0] / 100) * keys[3]);

// Estado check antes del cambio de range
inputCheck.addEventListener("click", (e) => {
  isChecked = inputCheck.checked;
  if (isChecked === true) {
    outputPriceXs.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
    outputPriceLg.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
  } else {
    outputPriceXs.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);
    outputPriceLg.innerHTML = '$' + parseFloat(keys[3]).toFixed(2);
  }
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
  outputViewsXs.innerHTML = views[this.value];
  outputViewsLg.innerHTML = views[this.value];

  inputCheck.addEventListener("click", (e) => {
    isChecked = inputCheck.checked;
    if (isChecked === true) {
      outputPriceXs.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
      outputPriceLg.innerHTML = '$' + parseFloat(applyDiscount).toFixed(2);
    } else {
      outputPriceXs.innerHTML = '$' + parseFloat(sliderStep).toFixed(2);
      outputPriceLg.innerHTML = '$' + parseFloat(sliderStep).toFixed(2);
    }
  });
}
/*see more button*/
function toggleDescription(button) {
  var description = button.previousElementSibling;
  if (description.style.maxHeight) {
    // If the description is expanded, collapse it
    description.style.maxHeight = null;
    button.innerText = "See more";
  } else {
    // If the description is collapsed, expand it
    description.style.maxHeight = description.scrollHeight + "px";
    button.innerText = "See less";
  }
}
/* check box for add cart--*/
function toggleCheckbox() {
  var checkboxContainer = document.getElementById("checkbox-container");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice() {
  var size = document.getElementById("size").value;
  var quantity = document.getElementById("quantity").value;
  var priceElement = document.getElementById("price");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 950;
  } else if (size === "medium") {
    pricePerPizza = 1900;
  } else if (size === "large") {
    pricePerPizza = 3400;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart2--*/
function toggleCheckbox2() {
  var checkboxContainer = document.getElementById("checkbox-container2");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice2() {
  var size = document.getElementById("size2").value;
  var quantity = document.getElementById("quantity2").value;
  var priceElement = document.getElementById("price2");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 950;
  } else if (size === "medium") {
    pricePerPizza = 1900;
  } else if (size === "large") {
    pricePerPizza = 3400;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart3--*/
function toggleCheckbox3() {
  var checkboxContainer = document.getElementById("checkbox-container3");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice3() {
  var size = document.getElementById("size3").value;
  var quantity = document.getElementById("quantity3").value;
  var priceElement = document.getElementById("price3");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 980;
  } else if (size === "medium") {
    pricePerPizza = 1930;
  } else if (size === "large") {
    pricePerPizza = 3500;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart4--*/
function toggleCheckbox4() {
  var checkboxContainer = document.getElementById("checkbox-container4");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice4() {
  var size = document.getElementById("size4").value;
  var quantity = document.getElementById("quantity4").value;
  var priceElement = document.getElementById("price4");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 980;
  } else if (size === "medium") {
    pricePerPizza = 1930;
  } else if (size === "large") {
    pricePerPizza = 3500;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart5--*/
function toggleCheckbox5() {
  var checkboxContainer = document.getElementById("checkbox-container5");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice5() {
  var size = document.getElementById("size5").value;
  var quantity = document.getElementById("quantity5").value;
  var priceElement = document.getElementById("price5");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 1150;
  } else if (size === "medium") {
    pricePerPizza = 2100;
  } else if (size === "large") {
    pricePerPizza = 3800;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart6--*/
function toggleCheckbox6() {
  var checkboxContainer = document.getElementById("checkbox-container6");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice6() {
  var size = document.getElementById("size6").value;
  var quantity = document.getElementById("quantity6").value;
  var priceElement = document.getElementById("price6");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 1250;
  } else if (size === "medium") {
    pricePerPizza = 2300;
  } else if (size === "large") {
    pricePerPizza = 4200;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart7--*/
function toggleCheckbox7() {
  var checkboxContainer = document.getElementById("checkbox-container7");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice7() {
  var size = document.getElementById("size7").value;
  var quantity = document.getElementById("quantity7").value;
  var priceElement = document.getElementById("price7");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 1250;
  } else if (size === "medium") {
    pricePerPizza = 2300;
  } else if (size === "large") {
    pricePerPizza = 4200;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart8--*/
function toggleCheckbox8() {
  var checkboxContainer = document.getElementById("checkbox-container8");
  checkboxContainer.classList.toggle("visible");
}
function updatePrice8() {
  var size = document.getElementById("size8").value;
  var quantity = document.getElementById("quantity8").value;
  var priceElement = document.getElementById("price8");

  var pricePerPizza;

  if (size === "small") {
    pricePerPizza = 1560;
  } else if (size === "medium") {
    pricePerPizza = 2930;
  } else if (size === "large") {
    pricePerPizza = 5150;
  }

  var totalPrice = pricePerPizza * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l--*/
function toggleCheckboxl() {
  var checkboxContainer = document.getElementById("checkbox-containerl");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel() {
  var quantity = document.getElementById("quantityl").value;
  var priceElement = document.getElementById("pricel");

  var pricePerlasagna = 1770;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l2--*/
function toggleCheckboxl2() {
  var checkboxContainer = document.getElementById("checkbox-containerl2");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel2() {
  var quantity = document.getElementById("quantityl2").value;
  var priceElement = document.getElementById("pricel2");

  var pricePerlasagna = 1770;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l3--*/
function toggleCheckboxl3() {
  var checkboxContainer = document.getElementById("checkbox-containerl3");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel3() {
  var quantity = document.getElementById("quantityl3").value;
  var priceElement = document.getElementById("pricel3");

  var pricePerlasagna = 2100;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l4--*/
function toggleCheckboxl4() {
  var checkboxContainer = document.getElementById("checkbox-containerl4");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel4() {
  var quantity = document.getElementById("quantityl4").value;
  var priceElement = document.getElementById("pricel4");

  var pricePerlasagna = 2100;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l5--*/
function toggleCheckboxl5() {
  var checkboxContainer = document.getElementById("checkbox-containerl5");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel5() {
  var quantity = document.getElementById("quantityl5").value;
  var priceElement = document.getElementById("pricel5");

  var pricePerlasagna = 2100;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l6--*/
function toggleCheckboxl6() {
  var checkboxContainer = document.getElementById("checkbox-containerl6");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel6() {
  var quantity = document.getElementById("quantityl6").value;
  var priceElement = document.getElementById("pricel6");

  var pricePerlasagna = 2500;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l7--*/
function toggleCheckboxl7() {
  var checkboxContainer = document.getElementById("checkbox-containerl7");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel7() {
  var quantity = document.getElementById("quantityl7").value;
  var priceElement = document.getElementById("pricel7");

  var pricePerlasagna = 2700;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart l8--*/
function toggleCheckboxl8() {
  var checkboxContainer = document.getElementById("checkbox-containerl8");
  checkboxContainer.classList.toggle("visible");
}
function updatePricel8() {
  var quantity = document.getElementById("quantityl8").value;
  var priceElement = document.getElementById("pricel8");

  var pricePerlasagna = 3100;

  var totalPrice = pricePerlasagna * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart t--*/
function toggleCheckboxt() {
  var checkboxContainer = document.getElementById("checkbox-containert");
  checkboxContainer.classList.toggle("visible");
}
function updatePricet() {
  var quantity = document.getElementById("quantityt").value;
  var priceElement = document.getElementById("pricet");

  var pricePerfries = 400;

  var totalPrice = pricePerfries * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart t1--*/
function toggleCheckboxt1() {
  var checkboxContainer = document.getElementById("checkbox-containert1");
  checkboxContainer.classList.toggle("visible");
}
function updatePricet1() {
  var quantity = document.getElementById("quantityt1").value;
  var priceElement = document.getElementById("pricet1");

  var pricePersauce = 150;

  var totalPrice = pricePersauce * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart t2--*/
function toggleCheckboxt2() {
  var checkboxContainer = document.getElementById("checkbox-containert2");
  checkboxContainer.classList.toggle("visible");
}
function updatePricet2() {
  var quantity = document.getElementById("quantityt2").value;
  var priceElement = document.getElementById("pricet2");

  var pricePersauce = 150;

  var totalPrice = pricePersauce * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart t3--*/
function toggleCheckboxt3() {
  var checkboxContainer = document.getElementById("checkbox-containert3");
  checkboxContainer.classList.toggle("visible");
}
function updatePricet3() {
  var quantity = document.getElementById("quantityt3").value;
  var priceElement = document.getElementById("pricet3");

  var pricePersauce = 150;

  var totalPrice = pricePersauce * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d1--*/
function toggleCheckboxd1() {
  var checkboxContainer = document.getElementById("checkbox-containerd1");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced1() {
  var quantity = document.getElementById("quantityd1").value;
  var priceElement = document.getElementById("priced1");

  var pricePerdrink = 250;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d2--*/
function toggleCheckboxd2() {
  var checkboxContainer = document.getElementById("checkbox-containerd2");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced2() {
  var quantity = document.getElementById("quantityd2").value;
  var priceElement = document.getElementById("priced2");

  var pricePerdrink = 250;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d3--*/
function toggleCheckboxd3() {
  var checkboxContainer = document.getElementById("checkbox-containerd3");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced3() {
  var quantity = document.getElementById("quantityd3").value;
  var priceElement = document.getElementById("priced3");

  var pricePerdrink = 300;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d4--*/
function toggleCheckboxd4() {
  var checkboxContainer = document.getElementById("checkbox-containerd4");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced4() {
  var quantity = document.getElementById("quantityd4").value;
  var priceElement = document.getElementById("priced4");

  var pricePerdrink = 300;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d5--*/
function toggleCheckboxd5() {
  var checkboxContainer = document.getElementById("checkbox-containerd5");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced5() {
  var quantity = document.getElementById("quantityd5").value;
  var priceElement = document.getElementById("priced5");

  var pricePerdrink = 300;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d6--*/
function toggleCheckboxd6() {
  var checkboxContainer = document.getElementById("checkbox-containerd6");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced6() {
  var quantity = document.getElementById("quantityd6").value;
  var priceElement = document.getElementById("priced6");

  var pricePerdrink = 450;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d7--*/
function toggleCheckboxd7() {
  var checkboxContainer = document.getElementById("checkbox-containerd7");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced7() {
  var quantity = document.getElementById("quantityd7").value;
  var priceElement = document.getElementById("priced7");

  var pricePerdrink = 450;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart d8--*/
function toggleCheckboxd8() {
  var checkboxContainer = document.getElementById("checkbox-containerd8");
  checkboxContainer.classList.toggle("visible");
}
function updatePriced8() {
  var quantity = document.getElementById("quantityd8").value;
  var priceElement = document.getElementById("priced8");

  var pricePerdrink = 500;

  var totalPrice = pricePerdrink * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart c1--*/
function toggleCheckboxc1() {
  var checkboxContainer = document.getElementById("checkbox-containerc1");
  checkboxContainer.classList.toggle("visible");
}
function updatePricec1() {
  var quantity = document.getElementById("quantityc1").value;
  var priceElement = document.getElementById("pricec1");

  var pricePercombo = 5900;

  var totalPrice = pricePercombo * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart c2--*/
function toggleCheckboxc2() {
  var checkboxContainer = document.getElementById("checkbox-containerc2");
  checkboxContainer.classList.toggle("visible");
}
function updatePricec2() {
  var quantity = document.getElementById("quantityc2").value;
  var priceElement = document.getElementById("pricec2");

  var pricePercombo = 6200;

  var totalPrice = pricePercombo * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart c3--*/
function toggleCheckboxc3() {
  var checkboxContainer = document.getElementById("checkbox-containerc3");
  checkboxContainer.classList.toggle("visible");
}
function updatePricec3() {
  var quantity = document.getElementById("quantityc3").value;
  var priceElement = document.getElementById("pricec3");

  var pricePercombo = 6200;

  var totalPrice = pricePercombo * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
/* check box for add cart c4--*/
function toggleCheckboxc4() {
  var checkboxContainer = document.getElementById("checkbox-containerc4");
  checkboxContainer.classList.toggle("visible");
}
function updatePricec4() {
  var quantity = document.getElementById("quantityc4").value;
  var priceElement = document.getElementById("pricec4");

  var pricePercombo = 2000;

  var totalPrice = pricePercombo * quantity;
  priceElement.textContent = "LKR " + totalPrice.toFixed(2);
}
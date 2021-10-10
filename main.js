var price = document.querySelector("#initial-price");
var quantity = document.querySelector("#stocks-quantity");
var crtPrice = document.querySelector("#current-price");
var submit = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submit.addEventListener("click", submitHandler);

function submitHandler() {
  var ip = Number(price.value);
  var qty = Number(quantity.value);
  var curr = Number(crtPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput(`No pain no gain and no gain no pain`);
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}

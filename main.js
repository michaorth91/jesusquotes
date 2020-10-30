const button = document.querySelector("#quote");
// const button = '<button id="quotes"></button>';


function quoteSelector() {
  const random = Math.round((Math.random())*5); // generate numbers between => 0-1, then multiply by 5

  alert(quotes[random]) // quotes[0-5]
}

button.addEventListener("click", quoteSelector);
// '<button id="quotes"></button>'.addEventListener("click", quoteSelector);


// to do
// Create a js file for quotes and name it quotes;
// use the quotes file aliong with the main JS.
// hint <script></script> ORDER MATTERS!
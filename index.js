
//DOM
const rate = document.getElementById("rate");
const swap = document.getElementById("swap-button");
const inputOne = document.getElementById("amount-one");
const inputTwo = document.getElementById("amount-two");

const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");

const swapButton = document.getElementById("swap-button");

const componentOne = document.getElementById("component-one");
const componentTwo = document.getElementById("component-two");

const headingOne = document.getElementById("currency-heading-one");
const headingTwo = document.getElementById("currency-heading-two");

const flagOne = document.getElementById("currency-flag-one");
const flagTwo = document.getElementById("currency-flag-two");

let currencies = [
    {
        code: "USD",
        name: "US Dollar",
        flag: "/images/USA.png"
    },
    {
        code: "AUD",
        name: "Australian Dollar",
        flag: "/images/Australia.png"
    },
    {
        code: "EUR",
        name: "Euro",
        flag: "/images/European Union.png"
    }, 
    {
        code: "GBP",
        name: "Pound Sterling",
        flag: "/images/United Kingdom.png"
    }
];

for (const currency of currencies) {

    if(currency.code == currencyOne.value){
        console.log(currency.code);
        headingOne.innerHTML = currency.name;
        flagOne.src = currency.flag;
    }

    if(currency.code == currencyTwo.value){
        console.log(currency.code);
        headingTwo.innerHTML = currency.name;
        flagTwo.src = currency.flag;
    }
    
}



//main function
async function fetchCurrency(){


setTimeout(() => {
    for (const currency of currencies) {
    if(currency.code == currencyOne.value){
        console.log(currency.code);
        headingOne.innerHTML = currency.name;
        flagOne.src = currency.flag;
    }

    if(currency.code == currencyTwo.value){
        console.log(currency.code);
        headingTwo.innerHTML = currency.name;
        flagTwo.src = currency.flag;
    }
}
    }, 100);

    let cOne = currencyOne.value;
    let cTwo = currencyTwo.value;
    
    await fetch(`https://api.exchangeratesapi.io/latest?base=${cOne}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let exchangeRate = data.rates[cTwo];
      console.log(`1 ${cOne} = ${data.rates[cTwo]} ${cTwo}`);
      rate.innerText = `1 ${cOne} = ${exchangeRate.toFixed(4)} ${cTwo}`;
      inputTwo.value = (inputOne.value * parseFloat(exchangeRate).toFixed(4));
      
    });
};

function swapCurrency () {

    componentOne.classList.add("move-left");
    componentTwo.classList.add("move-right");

    setTimeout(() => {
    componentOne.classList.remove("move-left");
    componentTwo.classList.remove("move-right");
    }, 500);
    


    let temp;
    // temp = inputTwo.value;
    // console.log(temp);
    // inputTwo.value = inputOne.value;
    // console.log(temp);
    // inputOne.value = temp;

    temp = currencyTwo.value;
    currencyTwo.value = currencyOne.value;
    currencyOne.value = temp;
    
    fetchCurrency();
}

//event listeners for inputs/selectors
    inputOne.addEventListener("change", fetchCurrency);
    inputTwo.addEventListener("change", fetchCurrency);
    currencyOne.addEventListener("change", fetchCurrency);
    currencyTwo.addEventListener("change", fetchCurrency);
    swapButton.addEventListener("click", swapCurrency);

fetchCurrency();
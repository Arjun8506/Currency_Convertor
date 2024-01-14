const inputOption = document.querySelector("#cuinput")
const cuoutput = document.querySelector("#cuoutput")
const fromnum = document.querySelector("#fromnum")
const tonum = document.querySelector("#tonum")
var output;

inputOption.addEventListener("change", async () => {
    let input = inputOption.value;
    console.log(input);

    await getcurrencyinfo(input)
})

cuoutput.addEventListener("change", () => {
    output = cuoutput.value
})

async function getcurrencyinfo(value) {
    let currencyData = await fetch(`https://api.vatcomply.com/rates?base=${value}`).then((res) => res.json())

    console.log(currencyData.rates);

    let mainobject = currencyData.rates
    console.log(output);

    if (mainobject.hasOwnProperty(output)) {
        let value = mainobject[output];
        let finalvalue =  value * fromnum.value;
        tonum.value = finalvalue
    }
}


let main = document.querySelector(".main")
let flag = true
let swap = document.querySelector("#swap")
swap.addEventListener("click", () => {
    if (flag === true) {
        main.style.flexDirection = "column-reverse"
        flag = false
    }
    else {
        main.style.flexDirection = "column"
        flag = true
    }
})
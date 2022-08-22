const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromDollarToYen = (USD) => {
    const EURO = USD/1.2
    const JPY = EURO * 127.9
    return JPY
}

const fromEuroToDollar = (EUR) => {
    const USD = EUR * 1.2
    return USD
}

const fromYenToPound = (JPY) => {
    const EURO = JPY/127.9
    const GBP = EURO * 0.8
    return GBP
}

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
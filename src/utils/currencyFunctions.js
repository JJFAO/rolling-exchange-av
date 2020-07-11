export const getCurrencySymbol = (currency) => {
    switch (currency) {
        case 'ars':
            return '$'
        case 'usd':
            return 'u$s'
        case 'eur':
            return '€'
        case 'jpy':
            return '¥'
    }
}
export const getCurrencyName = (currency) => {
    switch (currency) {
        case 'ars':
            return 'pesos argentinos'
        case 'usd':
            return 'dolar estadounidense'
        case 'eur':
            return 'euros'
        case 'jpy':
            return 'yenes'
    }
}

const exchange  = {
    ars: amount => amount * 70.87 *1.30,
    usd: amount => amount * 1,
    eur: amount => amount * 0.89,
    jpy: amount => amount * 107.04,
}

export const getExchange = (currency, amount) => (
    exchange[currency](amount)
);
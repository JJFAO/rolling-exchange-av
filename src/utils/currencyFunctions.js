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
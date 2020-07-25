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
      return 'yenes japoneses'
  }
}

export const getExchange = (fromCurrency, currency, amount) => {
  let exchange
  switch (fromCurrency) {
    case 'ars':
      switch (toCurrency) {
        case 'ars':
          exchange = amount * 1
          return exchange.toFixed(2)
        case 'usd':
          exchange = amount * 0.014
          return exchange.toFixed(2)
        case 'eur':
          exchange = amount * 0.012
          return exchange.toFixed(2)
        case 'jpy':
          exchange = amount * 1.48
          return exchange.toFixed(2)
      }
    case 'usd':
      switch (toCurrency) {
        case 'ars':
          exchange = amount * 70.87 * 1.30
          return exchange.toFixed(2)
        case 'usd':
          exchange = amount * 1
          return exchange.toFixed(2)
        case 'eur':
          exchange = amount * 0.89
          return exchange.toFixed(2)
        case 'jpy':
          exchange = amount * 107.04
          return exchange.toFixed(2)
      }
    case 'eur':
      switch (toCurrency) {
        case 'ars':
          exchange = amount * 83.74
          return exchange.toFixed(2)
        case 'usd':
          exchange = amount * 1.17
          return exchange.toFixed(2)
        case 'eur':
          exchange = amount * 1
          return exchange.toFixed(2)
        case 'jpy':
          exchange = amount * 123.70
          return exchange.toFixed(2)
      }
    case 'jpy':
      switch (toCurrency) {
        case 'ars':
          exchange = amount * 0.68
          return exchange.toFixed(2)
        case 'usd':
          exchange = amount * 0.0094
          return exchange.toFixed(2)
        case 'eur':
          exchange = amount * 0.0081
          return exchange.toFixed(2)
        case 'jpy':
          exchange = amount * 1
          return exchange.toFixed(2)
      }
  }
}
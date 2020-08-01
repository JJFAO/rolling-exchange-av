export const getCurrencySymbol = (currency) => {
  switch(currency) {
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
  switch(currency) {
    case 'ars':
      return 'pesos argentinos'
    case 'usd':
      return 'dolares estadounidense'
    case 'eur':
      return 'euros'
    case 'jpy':
      return 'yenes japoneses'
  }
}

const exchange = {
  ars: {
    ars: amount => amount * 1,
    usd: amount => amount * 0.014,
    eur: amount => amount * 0.012,
    jpy: amount => amount * 1.48,
  },
  usd: {
    ars: amount => amount * 70.87 * 1.30,
    usd: amount => amount * 1,
    eur: amount => amount * 0.89,
    jpy: amount => amount * 107.04,
  },
  eur: {
    ars: amount => amount * 83.74,
    usd: amount => amount * 1.17,
    eur: amount => amount * 1,
    jpy: amount => amount * 123.70,
  },
  jpy: {
    ars: amount => amount * 0.68,
    usd: amount => amount * 0.0094,
    eur: amount => amount * 0.0081,
    jpy: amount => amount * 1,
  },
}

export const getExchange = (fromCurrency, toCurrency, amount) => (
  exchange[fromCurrency][toCurrency](amount).toFixed(2)
)
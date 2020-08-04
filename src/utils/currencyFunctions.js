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
    ars: (amount, rate) => amount * 1,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
  },
  usd: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * 1,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
  },
  eur: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * 1,
    jpy: (amount, rate) => amount * rate,
  },
  jpy: {
    ars: (amount, rate) => amount * rate,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * 1,
  },
}

export const getExchange = (fromCurrency, toCurrency, rate, amount) => (
  exchange[fromCurrency][toCurrency](amount, rate).toFixed(2)
)
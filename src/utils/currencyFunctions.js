import { currencies } from "../constants/currencies"

export const getCurrencySymbol = (flag) => {
  const { symbol } = currencies.find((cur) => cur.flag === flag)
  return symbol
}

export const getCurrencyNickname = (flag) => {
  const { nickname } = currencies.find((cur) => cur.flag === flag)
  return nickname
}

const exchange = {
  ars: {
    ars: (amount, rate) => amount * 1,
    usd: (amount, rate) => amount * rate,
    eur: (amount, rate) => amount * rate,
    jpy: (amount, rate) => amount * rate,
  },
  usd: {
    ars: (amount, rate) => amount * rate * 1.30,
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
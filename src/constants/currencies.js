import { initials } from './initialRates'

const currencies = [
  {
    name: 'ARS',
    flag: 'ars',
    nickname: 'pesos argentinos',
    image: require('../assets/flags/ars.png'),
    rateInfo: initials['ARS'],
    symbol: '$'
  },
  {
    name: 'USD',
    flag: 'usd',
    nickname: 'dolares americanos',
    image: require('../assets/flags/usd.png'),
    rateInfo: initials['USD'],
    symbol: 'u$s'
  },
  {
    name: 'EUR',
    flag: 'eur',
    nickname: 'euros',
    image: require('../assets/flags/eur.png'),
    rateInfo: initials['EUR'],
    symbol: '€'
  },
  {
    name: 'JPY',
    flag: 'jpy',
    nickname: 'yenes japonés',
    image: require('../assets/flags/jpy.png'),
    rateInfo: initials['JPY'],
    symbol: '¥'
  },
  {
    name: 'BRL',
    flag: 'brl',
    nickname: 'real brasileño',
    image: require('../assets/flags/bra.png'),
    rateInfo: initials['BRL'],
    symbol: 'R$'
  },
  {
    name: 'VES',
    flag: 'ves',
    nickname: 'bolívar',
    image: require('../assets/flags/ven.png'),
    rateInfo: initials['VES'],
    symbol: 'Bs'
  },
  {
    name: 'BTC',
    flag: 'btc',
    nickname: 'bitcoin',
    image: require('../assets/flags/btc.png'),
    rateInfo: initials['BTC'],
    symbol: '₿'
  },
]

export {
  currencies,
}
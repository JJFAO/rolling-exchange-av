import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'

import { currencies } from '../constants/currencies'
import { darkTheme } from '../constants/colors'

const defaultTheme = darkTheme
const defaultCurrencies = currencies.map(curr => ({ ...curr, isFavorite: false }))
const THEME = '@theme'
const FAV_CURRENCIES = '@favCurrencies'
const FROM_CURRENCY = '@fromCurrency'

export const AsyncStorageServices = {
    async getTheme() {
        const theme = await AsyncStorage.getItem(THEME)
        return theme !== null ? JSON.parse(theme) : defaultTheme
    },
    async getDeviceCurrencies() {
        const currencies = await AsyncStorage.getItem(FAV_CURRENCIES)
        return currencies !== null ? JSON.parse(currencies) : defaultCurrencies
    },
    async getFromCurrencyFlag() {
        const currency = await AsyncStorage.getItem(FROM_CURRENCY)
        return currency ? JSON.parse(currency) : 'usd'
    },
    async saveTheme(theme) {
        try {
            const themeJson = JSON.stringify(theme)
            await AsyncStorage.setItem(THEME, themeJson)
        } catch (e) {
            console.log(e)
        }
    },
    async saveCurrencies(currencies) {
        try {
            const currenciesJson = JSON.stringify(currencies)
            AsyncStorage.setItem(FAV_CURRENCIES, currenciesJson)
        } catch (e) {
            console.log(e)
        }
    },
    async saveFromCurrency(fromCurrency) {
        try {
            const fromCurrencyJson = JSON.stringify(fromCurrency)
            AsyncStorage.setItem(FROM_CURRENCY, fromCurrencyJson)
        } catch (e) {
            console.log(e)
        }
    },
    async clearAppData() {
        try {
            const keys = await AsyncStorage.getAllKeys()
            await AsyncStorage.multiRemove(keys)
        } catch (e) {
            console.log(e)
        }
    },
}

export const getUpdatedCurrencies = (updated, currencies) => (
    currencies.map((cur) => (cur.name === updated.name) ? updated : cur)
)

export const getMatchedCurrencies = (term, currencies) => (
    (term.length > 2)
        ? currencies.filter(filterCurrencies(term))
        : currencies
)

const filterCurrencies = (term) => (currency) => {
    const currencyNick = currency.nickname.toLowerCase()
    const formattedTerm = term.toLowerCase()
    return currencyNick.includes(formattedTerm) || currency.flag.includes(formattedTerm)
}

export const fetchExchangeRate = (flag) => (
    fetch(`https://api.exchangerate.host/latest?base=${flag}`)
        .then(res => res.json())
        .then(responseJson => (
            { ...responseJson, date: moment().format('YYYY-MM-DD'), hour: moment().format('H:mm') }
        ))
        .catch(e => {
            console.log('error: ', e)
        })
)

export const updateIsFavorite = (name, currencies) => {
    const currency = currencies.find((cur) => cur.name === name)
    return { ...currency, isFavorite: !currency.isFavorite }
}

export const updateRateInfo = (flag, rateInfo, currencies) => {
    const currency = currencies.find((cur) => cur.flag === flag)
    return { ...currency, rateInfo }
}

export const getFromCurrency = (flag, currencies) => (
    currencies.find((cur) => cur.flag === flag)
)
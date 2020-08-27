import AsyncStorage from '@react-native-community/async-storage'

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
    async getFromCurrency() {
        const currency = await AsyncStorage.getItem(FROM_CURRENCY)
        return currency !== null ? JSON.parse(currency) : defaultCurrencies[1]
    },
    async setLocalTheme(theme) {
        try {
            const themeJson = JSON.stringify(theme)
            await AsyncStorage.setItem(THEME, themeJson)
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

export const getMatchedCurrencies = (term, currencies) => {
    if (term.length > 2) {
        return currencies.filter(currency => {
            const currencyNick = currency.nickname.toLowerCase()
            const formattedTerm = term.toLowerCase()
            console.log(currencyNick.includes(formattedTerm) || currency.flag.includes(formattedTerm))
            return currencyNick.includes(formattedTerm) || currency.flag.includes(formattedTerm)
        })
    } else {
        return currencies
    }
}

export const getMatchedCurrencies2 = (term, currencies) => (
    (term.length > 2)
        ? currencies.filter(filterCurrencies(term))
        : currencies
)

const filterCurrencies = (term) => (currency) => {
    const currencyNick = currency.nickname.toLowerCase()
    const formattedTerm = term.toLowerCase()
    return currencyNick.includes(formattedTerm) || currency.flag.includes(formattedTerm)
}
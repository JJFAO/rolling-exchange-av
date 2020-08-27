import React, { useState, useEffect, Fragment } from 'react';
import moment from 'moment'
import { StyleSheet, View, StatusBar, Platform, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { Provider as PaperProvider } from 'react-native-paper'
import CurrenciesTop from './src/screens/currencies/CurrenciesTop'
import CurrenciesContainer from './src/screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from './src/screens/currencies/CurrenciesBottom'
import FavoritesTop from './src/screens/favorites/FavoritesTop'
import FavoritesContainer from './src/screens/favorites/content/FavoritesContainer'
import { currencies } from './src/constants/currencies'
import { AsyncStorageServices, getMatchedCurrencies, getMatchedCurrencies2 } from './src/utils/helper';
const { getTheme, getDeviceCurrencies, getFromCurrency, setLocalTheme } = AsyncStorageServices

import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'

const windowHeigh = Dimensions.get('window').height
const defaultTheme = darkTheme
const defaultCurrencies = currencies.map(curr => ({ ...curr, isFavorite: false }))
const FAV_CURRENCIES = '@favCurrencies'
const FROM_CURRENCY = '@fromCurrency'

export default function App() {
  const [mainVisible, setMainVisible] = useState(true)
  const [fromCurrency, setFromCurrency] = useState({})
  const [amount, setAmount] = useState('')
  const [deviceCurrencies, setDeviceCurrencies] = useState([])
  const [filteredCurrencies, setFilteredCurrencies] = useState([])
  const [appTheme, setAppTheme] = useState(defaultTheme)

  useEffect(() => {
    getTheme().then(setAppTheme).catch(setAppTheme(defaultTheme))
    getDeviceCurrencies().then(setDeviceCurrencies).catch(setDeviceCurrencies(defaultCurrencies))
    getFromCurrency().then(setFromCurrency).catch(setFromCurrency(defaultCurrencies[1]))
  }, [])

  const styles = getStyle(appTheme)

  const searchCurrency = term => {
    const resultCurrencies = getMatchedCurrencies(term, deviceCurrencies)
    setFilteredCurrencies(resultCurrencies)
  }

  const updateTheme = async () => {
    const theme = (appTheme.name === 'darkTheme') ? lightTheme : darkTheme
    setAppTheme(theme)
    setLocalTheme(theme)
  }

  const updateRates = () => {
    fetch(`https://api.exchangerate.host/latest?base=${fromCurrency.flag}`)
      .then(res => res.json())
      .then(responseJson => {
        const rateInfo = { ...responseJson, hour: moment().format('H:mm') }
        let temp_allCurrencies = [...deviceCurrencies]
        const index = temp_allCurrencies.findIndex((cur => cur.name === fromCurrency.name))
        temp_allCurrencies[index].rateInfo = rateInfo
        setDeviceCurrencies(temp_allCurrencies)
        AsyncStorage.setItem(FAV_CURRENCIES, JSON.stringify(temp_allCurrencies))
        AsyncStorage.setItem(FROM_CURRENCY, JSON.stringify({ ...fromCurrency, rateInfo }))
        setFromCurrency({ ...fromCurrency, rateInfo })
      })
      .catch(e => {
        console.log('error: ', e)
      })
  }

  const updateCurrency = async (name, isFavorite) => {
    let temp_allCurrencies = [...deviceCurrencies]
    const index = temp_allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[index].isFavorite = !isFavorite
    setDeviceCurrencies(temp_allCurrencies)
    AsyncStorage.setItem(FAV_CURRENCIES, JSON.stringify(temp_allCurrencies))
  }

  const MainScreen = () => (
    <Fragment>
      <CurrenciesTop
        appTheme={appTheme}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        allCurrencies={deviceCurrencies}
        amount={amount}
        setAmount={setAmount}
        updateRates={updateRates}
      />
      <CurrenciesContainer
        appTheme={appTheme}
        fromCurrency={fromCurrency}
        amount={amount}
        changeScreen={setMainVisible}
        allCurrencies={deviceCurrencies}
      />
      <CurrenciesBottom
        appTheme={appTheme}
        updateTheme={updateTheme}
        updateRates={updateRates}
        lastRates={fromCurrency.rateInfo}
      />
    </Fragment>
  )

  const FavoritesScreen = () => (
    <Fragment>
      <FavoritesTop
        appTheme={appTheme}
        changeScreen={setMainVisible}
        searchCurrency={searchCurrency}
      />
      <FavoritesContainer
        appTheme={appTheme}
        allCurrencies={filteredCurrencies}
        updateCurrency={updateCurrency}
      />
    </Fragment>
  )

  return (
    <PaperProvider>
      <View style={{ minHeight: windowHeigh }}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}

        {(mainVisible)
          ? <MainScreen />
          : <FavoritesScreen />
        }
      </View>
    </PaperProvider>
  );
}

const getStyle = theme => (
  StyleSheet.create({
    statusBarUnderlay: {
      height: 28,
      backgroundColor: theme.secondary,
    }
  })
)
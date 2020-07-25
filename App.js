import React, { useState, Fragment, useEffect } from 'react';
import { View, StatusBar, Platform, Dimensions } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import CurrenciesTop from './src/screens/currencies/CurrenciesTop'
import CurrenciesContainer from './src/screens/currencies/content/CurrenciesContainer'
import CurrenciesBottom from './src/screens/currencies/CurrenciesBottom'
import FavoritesTop from './src/screens/favorites/FavoritesTop'
import FavoritesContainer from './src/screens/favorites/content/FavoritesContainer'
import currencies from './src/constants/currencies'

import { darkTheme } from './src/constants/colors'
import { lightTheme } from './src/constants/colors'
import { lightTheme as defaultTheme } from './src/constants/colors'

export default function App() {
  const [wHeight, setWHeight] = useState(100)
  const [mainVisible, setMainVisible] = useState(true)
  const [fromCurrency, setFromCurrency] = useState('ars')
  const [amount, setAmount] = useState('')
  const [favoriteCurrencies, setFavoriteCurrencies] = useState([])

  useEffect(() => {
    setTimeout(() => {
      console.log(Dimensions.get('window').height)
      setWHeight(Dimensions.get('window').height)
    }, 200);
  }, [])

  const [allCurrencies, setAllCurrencies] =
    useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
  const [appTheme, setAppTheme] = useState(defaultTheme)
  const updateTheme = () => {
    appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies(prevState => [...prevState, newCurrency])
  }

  const updateCurrency = (name, isFavorite) => {
    let temp_allCurrencies = allCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
  }

  return (
    <PaperProvider>
      <View style={{minHeight: wHeight}}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        {Platform.OS === 'android' && <View style={getStyle(appTheme, 'statusBarUnderlay')} />}

        {
          mainVisible ?
            (
              <Fragment>
                <CurrenciesTop
                  appTheme={appTheme}
                  amount={amount}
                  setAmount={setAmount}
                  fromCurrency={fromCurrency}
                  setFromCurrency={setFromCurrency}
                />
                <CurrenciesContainer
                  appTheme={appTheme}
                  amount={amount}
                  changeScreen={setMainVisible}
                  allCurrencies={allCurrencies}
                  fromCurrency={fromCurrency}
                />
                <CurrenciesBottom appTheme={appTheme} updateTheme={updateTheme} />
              </Fragment>
            )
            :
            (
              <Fragment>
                <FavoritesTop appTheme={appTheme} changeScreen={setMainVisible} />
                <FavoritesContainer
                  appTheme={appTheme}
                  allCurrencies={allCurrencies}
                  addFavoriteCurrency={addFavoriteCurrency}
                  updateCurrency={updateCurrency}
                />
              </Fragment>
            )
        }
      </View>
    </PaperProvider>
  );
}

const getStyle = (theme, component) => {
  switch (component) {
    case 'statusBarUnderlay':
      return ({
        height: 28,
        backgroundColor: theme.secondary,
      })
  }
}
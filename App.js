import React, { useState, Fragment } from 'react';
import { View, StatusBar, Platform } from 'react-native';
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
  const [ mainVisible, setMainVisible ] = useState(true)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [ amount, setAmount ] = useState('')
  const [ favoriteCurrencies, setFavoriteCurrencies ] = useState([])
  const [ allCurrencies, setAllCurrencies ] =
    useState(currencies.map(curr => ({ ...curr, isFavorite: false })))
  const [ appTheme, setAppTheme ] = useState(defaultTheme)
  const updateTheme = () => {
    appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
  }

  const addFavoriteCurrency = newCurrency => {
    setFavoriteCurrencies( prevState => [...prevState, newCurrency] )
  }

  const updateCurrency = ( name, isFavorite ) => {
    let temp_allCurrencies = allCurrencies
    const objIndex = allCurrencies.findIndex((obj => obj.name === name))
    temp_allCurrencies[objIndex].isFavorite = !isFavorite
    setAllCurrencies(temp_allCurrencies)
  }

  return (
    <PaperProvider>
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
      
    </PaperProvider>
  );
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'statusBarUnderlay':
      return({
        height: 28,
        backgroundColor: theme.secondary,
      })
  }
}
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

const CurrenciesContainer = ({ appTheme, changeScreen, amount, allCurrencies, fromCurrency }) => (
  <>
    <View style={getStyle(appTheme, 'currenciesContainer')}>
      <Button onPress={() => changeScreen(false)} style={getStyle(appTheme, 'button')}>
        <Text style={getStyle(appTheme, 'buttonText')}>Agregar nueva moneda</Text>
      </Button>
      {
        allCurrencies.filter(curr => curr.isFavorite).map(fav =>
          <CurrencyCard
            key={fav.name}
            appTheme={appTheme}
            amount={amount}
            name={fav.name}
            flag={fav.flag}
            fromCurrency={fromCurrency}
          />
        )
      }
    </View>
  </>
)

const getStyle = (theme, component) => {
  switch(component) {
    case 'currenciesContainer':
      return({
        flex: 8,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      })
    case 'button':
      return({
        backgroundColor: theme.primary,
      })
    case 'buttonText':
      return({
        color: theme.link,
      })
  }
}

export default CurrenciesContainer
import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'
import currencies from '../../constants/currencies';

const CurrenciesContainer = ({ favoriteCurrencies, appTheme, changeScreen, amount }) => (
  <>
    <View style={getStyle(appTheme, 'currenciesContainer')}>
      <Button onPress={() => changeScreen(false)} style={getStyle(appTheme, 'button')}>
        <Text style={getStyle(appTheme, 'buttonText')}>Agregar nueva moneda</Text>
      </Button>
      {
        currencies.map(fav =>
          <CurrencyCard key={fav.name} amount={amount} appTheme={appTheme} name={fav.name} flag={fav.flag} />
        )
      }
    </View>
  </>
)

const styles = StyleSheet.create({
  currenciesContainer: {
    flex: 8,
    backgroundColor: theme.primary,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  button: {
    backgroundColor: theme.primary,
  },
  buttonText: {
    color: theme.link,
  }
})

const getStyle = (theme, component) => {
  switch (component) {
    case 'currenciesContainer':
      return ({
        flex: 8,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      })
    case 'button':
      return ({
        backgroundColor: theme.primary,
      })
    case 'buttonText':
      return ({
        color: theme.link,
      })
  }
}

export default CurrenciesContainer
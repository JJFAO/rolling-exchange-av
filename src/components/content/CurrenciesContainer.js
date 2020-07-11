import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const CurrenciesContainer = ({ appTheme, changeScreen }) => (
  <>
    <View style={getStyle(appTheme, 'currenciesContainer')}>
      <Button onPress={() => changeScreen(false)} style={getStyle(appTheme, 'button')}>
        <Text style={getStyle(appTheme, 'buttonText')}>Agregar nueva moneda</Text>
      </Button>
      <CurrencyCard appTheme={appTheme} name="ARS" flag={"ars"} />
      <CurrencyCard appTheme={appTheme} name="EUR" flag={"eur"} />
      <CurrencyCard appTheme={appTheme} name="JPY" flag={"jpy"} />
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
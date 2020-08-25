import React from 'react'
import { StyleSheet, View, Text, ScrollView, ImageBackground } from 'react-native'
import { Button } from 'react-native-paper'
import CurrencyCard from './CurrencyCard';

const bgLight = require('../../../assets/descarga-light.jpg')
const bgDark = require('../../../assets/descarga.jpg')

const CurrenciesContainer = ({ appTheme, changeScreen, fromCurrency, amount, allCurrencies }) => {
  const styles = getStyle(appTheme)
  const bgImage =  appTheme.name === 'darkTheme' ? bgDark : bgLight

  return(
      <ImageBackground style={styles.image} source={bgImage}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <Button onPress={() => changeScreen(false)} style={styles.button}>
          <Text style={styles.buttonText}>Agregar nueva moneda</Text>
        </Button>
        {
          allCurrencies.filter(curr => curr.isFavorite).map(fav =>
            <CurrencyCard
              key={fav.name}
              appTheme={appTheme}
              fromCurrency={fromCurrency}
              amount={amount}
              currency={fav}
            />
          )
        }
      </ScrollView>
    </ImageBackground>
  )
}


const getStyle = theme => (
  StyleSheet.create({
    currenciesContainer: {
      flex: 8,
      // backgroundColor: require('../../../assets/descarga.jpg'),
      width: '100%',
    },
    button: {
      backgroundColor: theme.opacity,
    },
    buttonText: {
      color: theme.link,
    },
    image: {
      flex: 8,
      justifyContent: "center"
    },
  })
)

export default CurrenciesContainer
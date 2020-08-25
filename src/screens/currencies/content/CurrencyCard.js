import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import {
  useFonts,
  Karla_400Regular,
} from "@expo-google-fonts/dev";

import { ActivityIndicator } from 'react-native-paper';

const CurrencyCard = ({ appTheme, fromCurrency, amount, currency }) => {
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
  });
  const { name, image, symbol, nickname } = currency
  const styles = getStyle(appTheme)
  const exchange = (fromCurrency.rateInfo.rates[name] * amount).toFixed(2)

  return (!fontsLoaded ? <ActivityIndicator animating={true} color={appTheme.link} /> :
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image
          source={image}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.rightContainer}>
        {
          amount !== '' ?
            <>
              <Text style={styles.text}>
                {symbol}
                {exchange}
              </Text>
              <Text style={styles.text}>{nickname}</Text>
            </>
            :
            null
        }
      </View>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    card: {
      backgroundColor: theme.container,
      padding: 25,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      fontSize: 17,
      color: theme.textPrimary,
      fontFamily: "Karla_400Regular",
      textAlign: 'right',
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContainer: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-end',
    }
  })
)

export default CurrencyCard
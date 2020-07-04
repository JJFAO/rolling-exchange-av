import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

import flags from '../../constants/flags'

const CurrencyCard = ({ name, flag }) => {
  let url = ''
  switch(flag) {
    case 'ars':
      url = flags.ars
      break
    case 'eur':
      url = flags.eur
      break
    case 'jpy':
      url = flags.jpy
      break
    case 'usd':
      url = flags.usd
      break
  }

  return(
    <View style={styles.card}>
      <Image
        source={url}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.container,
    width: '90%',
    padding: 25,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    color: theme.textPrimary,
  },
})

export default CurrencyCard
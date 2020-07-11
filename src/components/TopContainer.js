import React, { useState } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../constants/colors'

const TopContainer = ({appTheme, amount, setAmount}) => {
  const [selectedCurrency] = useState({ name: 'USD', flag: 'usd' })

  return (
    <View style={getStyle(appTheme, 'topContainer')}>
      <View style={getStyle(appTheme, 'selectedCurrency')}>
        <Image
          source={require('../assets/flags/usd.png')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={getStyle(appTheme, 'selectedCurrencyName')}>{selectedCurrency.name}</Text>
      </View>
      <TextInput
        style={getStyle(appTheme, 'input')}
        keyboardType='numeric'
        label="¿Cuanto queres convertir?"
        value={amount}
        onChangeText={input => setAmount(input)}
      />
      {
        amount !== '' ?
        <Button onPress={() => setAmount('')} icon="close" color={appTheme.link} />
        :
        <View style={{width: 65}} />
      }
    </View>
  )
}

const getStyle = (theme, component) => {
  switch (component) {
    case 'topContainer':
      return ({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'input':
      return ({
        width: '60%',
        paddingBottom: 10,
        height: 60
      })
    case 'selectedCurrency':
      return ({
        width: '20%',
        paddingBottom: 10,
        height: 60,
        marginRight: 1,
        alignItems: 'center',
      })
    case 'selectedCurrencyName':
      return ({
        color: theme.link,
        textAlign: 'center',
        marginTop: 5,
      })
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.secondary,
  },
  input: {
    width: '60%',
    paddingBottom: 10,
    height: 60
  },
  selectedCurrency: {
    width: '20%',
    paddingBottom: 10,
    height: 60,
    marginRight: 1,
    alignItems: 'center',
  },
  selectedCurrencyName: {
    color: theme.link,
    textAlign: 'center',
    marginTop: 5,
  }
})


export default TopContainer
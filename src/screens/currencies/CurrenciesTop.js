import React from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, amount, setAmount, fromCurrency }) => {
  const requiredFlag = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
  }

  return(
    <View style={getStyle(appTheme, 'topContainer')}>
      <View style={getStyle(appTheme, 'fromCurrency')}>
        <Image
          source={requiredFlag[fromCurrency]}
          style={{ width: 50, height: 50 }}
        />
        <Text style={getStyle(appTheme, 'fromCurrencyName')}>{fromCurrency.toUpperCase()}</Text>
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
          <Button onPress={() => setAmount('')} icon='close' color={appTheme.link} />
        :
          <View style={{ width: 65 }} />
      }
    </View>
  )
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'topContainer':
      return({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'input':
      return({
        width: '60%',
        paddingBottom: 10,
        height: 60
      })
    case 'fromCurrency':
      return({
        width: '20%',
        paddingBottom: 10,
        height: 60,
        marginRight: 1,
        alignItems: 'center',
      })
    case 'fromCurrencyName':
      return({
        color: theme.link,
        textAlign: 'center',
        marginTop: 5,
      })
  }
}

export default CurrenciesTop
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, amount, setAmount, fromCurrency }) => {
  const [showSelection, setShowSelection] = useState(false)
  const requiredFlag = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
  }
  const onHandleShowSelection = () => {
    setShowSelection(!showSelection)
  }

  const flags = ['usd', 'ars', 'eur', 'jpy']

  return (
    <>
      <View style={getStyle(appTheme, 'topContainer')}>
        <View style={getStyle(appTheme, 'fromCurrency')}>
          <TouchableOpacity style={getStyle(appTheme, 'fromCurrencyButton')} onPress={onHandleShowSelection}>
            <Image
              source={requiredFlag[fromCurrency]}
              style={{ width: 50, height: 50 }}
            />
            <Text style={getStyle(appTheme, 'fromCurrencyName')}>{fromCurrency.toUpperCase()}</Text>
          </TouchableOpacity>
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
      {
        showSelection &&
        <View style={getStyle(appTheme, 'selection')}>
          <Text style={getStyle(appTheme, 'selectionText')}>Seleccioná una moneda
          </Text>
          <View style={getStyle(appTheme, 'selectionCurrencies')}>
            {flags.map(f =>
              <View style={getStyle(appTheme, 'selectionCurrencyButton')}>
                <Image source={requiredFlag[f]} style={{ width: 50, height: 50 }} />
                <Text style={getStyle(appTheme, 'fromCurrencyName')}>{f.toUpperCase()}</Text>
              </View>
            )}
          </View>
        </View>
      }
    </>
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
    case 'fromCurrency':
      return ({
        width: '20%',
        paddingBottom: 10,
        height: 60,
        marginRight: 1,
        alignItems: 'center',
      })
    case 'fromCurrencyName':
      return ({
        color: theme.link,
        textAlign: 'center',
        marginTop: 5,
      })
    case 'selection':
      return ({
        width: '100%',
        backgroundColor: theme.secondary,
      })
    case 'selectionText':
      return ({
        color: theme.textSecondary,
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 5,
      })
    case 'selectionCurrencies':
      return ({
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '25%',
        width: '100%',
        paddingBottom: 10,
      })
    case 'selectionCurrenciesButton':
      return ({
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '25%',
        paddingTop: 10,
      })
    case 'fromCurrencyButton':
      return ({
        flex: 1.6,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 50,
        marginLeft: 30,
      })
  }
}

export default CurrenciesTop
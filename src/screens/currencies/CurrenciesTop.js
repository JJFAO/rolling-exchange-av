import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const CurrenciesTop = ({ appTheme, fromCurrency, setFromCurrency, amount, setAmount, updateRates }) => {
  const styles = getStyle(appTheme)
  const [showSelection, setShowSelection] = useState(false)
  const requireFlag = {
    ars: require('../../assets/flags/ars.png'),
    usd: require('../../assets/flags/usd.png'),
    eur: require('../../assets/flags/eur.png'),
    jpy: require('../../assets/flags/jpy.png'),
  }
  const onHandleShowSelection = () => {
    setShowSelection(!showSelection)
  }
  const onHandleSelectCurrency = currency => {
    setFromCurrency(currency)
    setShowSelection(!showSelection)
    updateRates()
  }

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.fromCurrency}>
          <TouchableOpacity style={styles.fromCurrencyButton} onPress={onHandleShowSelection}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={requireFlag[fromCurrency]}
                style={{ width: 40, height: 40 }}
              />
              {/* <Button icon={'swap-vertical-bold'} color={appTheme.link} style={{minWidth: 20}}></Button> */}
              <Text style={styles.fromCurrencyName}> ⇅</Text>
            </View>
            <Text style={styles.fromCurrencySelectedName}>{fromCurrency.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          keyboardType='numeric'
          label="¿Cuanto querés convertir?"
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
        <View style={styles.selection}>
          <Text style={styles.selectionText}>Seleccioná una moneda</Text>
          <View style={styles.selectionCurrencies}>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('ars')}>
                <Image
                  source={requireFlag['ars']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.fromCurrencyName}>{'ars'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('usd')}>
                <Image
                  source={requireFlag['usd']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.fromCurrencyName}>{'usd'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('eur')}>
                <Image
                  source={requireFlag['eur']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.fromCurrencyName}>{'eur'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectionCurrencyButton}>
              <TouchableOpacity onPress={() => onHandleSelectCurrency('jpy')}>
                <Image
                  source={requireFlag['jpy']}
                  style={{ width: 50, height: 50 }}
                />
                <Text style={styles.fromCurrencyName}>{'jpy'.toUpperCase()}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    topContainer: {
      flex: 1.6,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.primary,
    },
    input: {
      width: '60%',
      paddingBottom: 10,
      height: 60
    },
    fromCurrency: {
      width: '20%',
      padding: 5,
      // height: 60,
      marginRight: 1,
      backgroundColor: theme.container,
      alignItems: 'center',
    },
    fromCurrencyName: {
      color: theme.link,
      textAlign: 'center',
      marginTop: 3,
    },
    fromCurrencySelectedName: {
      color: theme.link,
      textAlign: 'center',
      marginTop: 2,
      paddingRight: 15,
    },
    selection: {
      width: '100%',
      backgroundColor: theme.container,
    },
    selectionText: {
      color: theme.textPrimary,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    selectionCurrencies: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '25%',
      width: '100%',
      paddingBottom: 10,
    },
    selectionCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '25%',
      paddingTop: 10,
    },
    fromCurrencyButton: {
      alignItems: 'center',
      justifyContent: 'center',
      // flexDirection: 'row',
      width: '100%',
      // height: 60,
    }
  })
)

export default CurrenciesTop
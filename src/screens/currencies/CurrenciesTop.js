import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-community/async-storage'

const FROM_CURRENCY = '@fromCurrency'

const CurrenciesTop = (props) => {
  const { appTheme, fromCurrency, setFromCurrencyFlag, amount, setAmount, allCurrencies } = props
  const [showSelection, setShowSelection] = useState(false)
  const styles = getStyle(appTheme)

  const onHandleShowSelection = () => {
    setShowSelection(!showSelection)
  }
  
  const onHandleSelectCurrency = flag => {
    setFromCurrencyFlag(flag)
    AsyncStorage.setItem(FROM_CURRENCY, JSON.stringify(flag))
    setShowSelection(!showSelection)
  }

  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.fromCurrency}>
          <TouchableOpacity style={styles.fromCurrencyButton} onPress={onHandleShowSelection}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={fromCurrency.image}
                style={{ width: 40, height: 40 }}
              />
              {/* <Button icon={'swap-vertical-bold'} color={appTheme.link} style={{minWidth: 20}}></Button> */}
              <Text style={styles.fromCurrencyName}> ⇅</Text>
            </View>
            <Text style={styles.fromCurrencySelectedName}>{fromCurrency.name}</Text>
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
            {
              allCurrencies.map((cur) => (
                <View style={styles.selectionCurrencyButton} key={cur.name}>
                  <TouchableOpacity onPress={() => onHandleSelectCurrency(cur.flag)}>
                    <Image
                      source={cur.image}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text style={styles.fromCurrencyName}>{cur.name}</Text>
                  </TouchableOpacity>
                </View>
              ))
            }
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
      backgroundColor: theme.opacity,
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
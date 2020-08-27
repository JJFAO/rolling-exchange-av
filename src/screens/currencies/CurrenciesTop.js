import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
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

  const handleChange = input => (
    input.length < 15 && setAmount(input)
  )

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
          onChangeText={handleChange}
        />
        {!!amount &&
          <Button
            icon='close'
            onPress={() => setAmount('')}
            style={styles.close}
            color={appTheme.link}
          />
        }
      </View>
      {
        showSelection &&
        <View style={styles.selection}>
          <Text style={styles.selectionText}>Seleccioná una moneda</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {
              allCurrencies.map((cur) => (
                <TouchableOpacity
                  onPress={() => onHandleSelectCurrency(cur.flag)}
                  key={cur.name}
                  style={styles.touchCurrency}
                >
                  <Image
                    source={cur.image}
                    style={{ width: 50, height: 50 }}
                  />
                  <Text style={styles.fromCurrencyName}>{cur.name}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      }
    </>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    topContainer: {
      paddingTop: 24,
      paddingBottom: 24,
      alignItems: 'stretch',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.primary,
      position: 'relative'
    },
    input: {
      width: '60%',
      padding: 5,
      height: 60,
      marginRight: 10,
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
      marginTop: 5,
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
      paddingTop: 7,
    },
    selectionText: {
      color: theme.textPrimary,
      textAlign: 'center',
      marginTop: 5,
      marginBottom: 5,
    },
    close: {
      position: 'absolute',
      right: -5,
      minWidth: 0,
      width: 44
    },
    touchCurrency: {
      marginTop: 5,
      marginBottom: 10,
      marginLeft: 17,
      marginRight: 17,
    }
  })
)

export default CurrenciesTop
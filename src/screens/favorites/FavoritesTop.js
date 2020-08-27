import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const FavoritesTop = ({ appTheme, changeScreen, searchCurrency, allCurrencies }) => {
  const styles = getStyle(appTheme)
  const [ input, setInput ] = useState('')

  useEffect(
    () => searchCurrency(input)
    , [input, allCurrencies]
  )

  return(
    <View style={styles.favoritesSearchbar}>
      <Button
        onPress={() => changeScreen(true)}
        color={appTheme.link}
        icon="arrow-left-circle"
        style={{marginLeft: 8}}
      />
      <TextInput
        style={styles.input}
        label="¿Qué moneda estás buscando?"
        value={input}
        onChangeText={setInput}
        maxLength={15}
        />
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    favoritesSearchbar: {
      paddingTop: 24,
      paddingBottom: 24,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: theme.primary,
    },
    input: {
      width: '60%',
      padding: 5,
      height: 60,
    }
  })
)

export default FavoritesTop
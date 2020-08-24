import React, { useState, useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

const FavoritesTop = ({ appTheme, changeScreen, searchCurrency }) => {
  const styles = getStyle(appTheme)
  const [ input, setInput ] = useState('')

  useEffect(
    () => searchCurrency(input)
    , [input]
  )

  return(
    <View style={styles.favoritesSearchbar}>
      <Button
        onPress={() => changeScreen(true)}
        color={appTheme.link}
        icon="arrow-left-circle"
      />
      <TextInput
        style={styles.input}
        label="¿Qué moneda estás buscando?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    favoritesSearchbar: {
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
    }
  })
)

export default FavoritesTop
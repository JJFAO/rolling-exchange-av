import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../../constants/colors'

const FavoritesSearchbar = ({ changeScreen, appTheme }) => {
  const [input, setInput] = useState('')

  return (
    <View style={getStyle(appTheme, 'favoritesSearchbar')}>
      <Button
        onPress={() => changeScreen(true)}
        color={theme.link}
        icon="keyboard-backspace"
      />
      <TextInput
        style={getStyle(appTheme, 'input')}
        keyboardType='numeric'
        label="¿Que moneda estás buscando?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
}

const getStyle = (theme, component) => {
  switch (component) {
    case 'favoritesSearchbar':
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
  }
}

const styles = StyleSheet.create({
  favoritesSearchbar: {
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
  }
})

export default FavoritesSearchbar
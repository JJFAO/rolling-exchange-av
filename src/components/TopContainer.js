import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native'
import { TextInput } from 'react-native-paper';

//import { darkTheme as theme } from '../constants/colors'
import { lightTheme as theme } from '../constants/colors'

const TopContainer= () => {
  const [input, setInput] = useState('');

  return(
    <View style={styles.topContainer}>
      <View style={styles.selectedCurrency}>
        <Image
          source={require('../assets/flags/ars.png')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.selectedCurrencyName}>ARS</Text>
      </View>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        label="¿Cuanto queres convertir?"
        value={input}
        onChangeText={input => setInput(input)}
      />
    </View>
  )
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
    marginRight: 15,
    alignItems: 'center',
  },
  selectedCurrencyName: {
    color: theme.link,
    textAlign: 'center',
    marginTop: 5
  }
});

export default TopContainer
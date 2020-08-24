import React from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import { Button, ActivityIndicator, Colors } from 'react-native-paper'
import {
  useFonts,
  Karla_400Regular,
} from "@expo-google-fonts/dev";

import flags from '../../../constants/flags'
import { getCurrencyNickname } from '../../../utils/currencyFunctions'

const FavoriteCard = ({
  appTheme,
  name,
  flag,
  isFavorite,
  addFavoriteCurrency,
  updateCurrency,
}) => {
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
  });
  const styles = getStyle(appTheme)

  const url = flags[flag]

  const onTouchStar = () => {
    addFavoriteCurrency({ name: name, flag: flag })
    updateCurrency(name, isFavorite)
  }

  return (!fontsLoaded ? <ActivityIndicator animating={true} color={appTheme.link} /> : 
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={styles.text}>
            {name}
          </Text>
          <Text style={styles.text}>{getCurrencyNickname(flag)}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onTouchStar}>
        <View style={styles.rightContainer}>
          <Button
            icon={isFavorite ? 'star' : 'star-outline'}
            color={appTheme.link}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    card: {
      backgroundColor: theme.container,
      width: '90%',
      padding: 25,
      margin: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    text: {
      fontSize: 17,
      fontFamily: "Karla_400Regular",
      color: theme.textPrimary,
    },
    leftContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    rightContainer: {
      // flex: 1,
      // flexDirection: 'column',
      // alignItems: 'flex-end',
    }
  })
)

export default FavoriteCard
import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import FavoriteCard from './FavoriteCard';

const bgLight = require('../../../assets/descarga-light.jpg')
const bgDark = require('../../../assets/descarga.jpg')

const FavoritesContainer = ({
  appTheme,
  allCurrencies,
  addFavoriteCurrency,
  updateCurrency
}) => {
  const styles = getStyle(appTheme)
  const bgImage = appTheme.name === 'darkTheme' ? bgDark : bgLight

  return (
    <ImageBackground style={styles.image} source={bgImage}>
      {/* <View style={styles.favoritesContainer}> */}
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', width: '100%' }}>
        {allCurrencies.map(curr =>
          <FavoriteCard
            key={curr.name}
            appTheme={appTheme}
            name={curr.name}
            flag={curr.flag}
            isFavorite={curr.isFavorite}
            updateCurrency={updateCurrency}
            addFavoriteCurrency={addFavoriteCurrency}
          />
        )}
      </ScrollView>
      {/* </View> */}
    </ImageBackground>
  )
}

const getStyle = theme => (
  StyleSheet.create({
    favoritesContainer: {
      flex: 8,
      backgroundColor: theme.primary,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    image: {
      alignItems: 'center',
      flex: 8,
      justifyContent: "center"
    },
  })
)

export default FavoritesContainer
import React from 'react'
import { StyleSheet, View, ScrollView, ImageBackground } from 'react-native'
import FavoriteCard from './FavoriteCard';

const bgLight = require('../../../assets/descarga-light.jpg')
const bgDark = require('../../../assets/descarga.jpg')

const FavoritesContainer = ({ appTheme, allCurrencies, updateCurrency }) => {
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
            updateCurrency={updateCurrency}
            currency={curr}
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
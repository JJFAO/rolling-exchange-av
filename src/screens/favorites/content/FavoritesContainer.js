import React from 'react'
import { View, ScrollView } from 'react-native'
import FavoriteCard from './FavoriteCard';

const FavoritesContainer = ({
  appTheme,
  allCurrencies,
  addFavoriteCurrency,
  updateCurrency
}) => (
    <View style={getStyle(appTheme, 'favoritesContainer')}>
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
    </View>
  )

const getStyle = (theme, component) => {
  switch (component) {
    case 'favoritesContainer':
      return ({
        flex: 8,
        backgroundColor: theme.primary,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
      })
  }
}

export default FavoritesContainer
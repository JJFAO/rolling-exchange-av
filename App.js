import React, { useState, Fragment } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper'
import TopContainer from './src/components/TopContainer'
import CurrenciesContainer from './src/components/content/CurrenciesContainer'
import BottomContainer from './src/components/BottomContainer'
import FavoritesSearchbar from './src/components/favorites/FavoritesSearchbar'
import FavoritesContainer from './src/components/favorites/FavoritesContainer'

// lightTheme or darkTheme
import { darkTheme as defaultTheme, lightTheme, darkTheme } from './src/constants/colors'

export default function App() {
  const [ mainVisible, setMainVisible ] = useState(true)
  const [appTheme, setAppTheme] = useState(defaultTheme)
  const updateTheme = () => {
    appTheme.name === 'darkTheme' ? setAppTheme(lightTheme) : setAppTheme(darkTheme)
  }

  return (
    <PaperProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
      {Platform.OS === 'android' && <View style={getStyle(appTheme, 'statusBarUnderlay')} />}

      {
        mainVisible ?
        (
          <Fragment>
            <TopContainer appTheme={appTheme} />
            <CurrenciesContainer appTheme={appTheme} changeScreen={setMainVisible} />
            <BottomContainer appTheme={appTheme} updateTheme={updateTheme} />
          </Fragment>
        )
        :
        (
          <Fragment>
            <FavoritesSearchbar appTheme={appTheme} changeScreen={setMainVisible} />
            <FavoritesContainer appTheme={appTheme} />
          </Fragment>
        )
      }
      
    </PaperProvider>
  );
}


const getStyle = (theme, component) => {
  switch(component) {
    case 'statusUnderlay':
      return({
        height: 28,
        backgroundColor: theme.secondary,    
      })
  }
}

// const getStyle = (theme, component) => {
//   return styles[component]
// }

// const styles = StyleSheet.create({
//   statusBarUnderlay: {
//     height: 28,
//     backgroundColor: theme.secondary,
//   },
// });
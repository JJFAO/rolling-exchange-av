import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-paper'

// lightTheme or darkTheme
import { darkTheme as theme } from '../constants/colors'

const BottomContainer = ({appTheme, updateTheme}) => (
  <View style={getStyle(appTheme, 'bottomContainer')}>
    <Button color={theme.link} icon="update" style={getStyle(appTheme, 'button')} />
    <View>
      <Text style={getStyle(appTheme, 'updateText')}>Ultima actualización</Text>
      <Text style={getStyle(appTheme, 'updateText')}>4 de Julio de 2020</Text>
    </View>
    <Button onPress={updateTheme} color={theme.link} icon="theme-light-dark" style={getStyle(appTheme, 'button')} />
  </View>
)

const getStyle = (theme, component) => {
  switch (component) {
    case 'bottomContainer':
      return ({
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: theme.primary,
      })
    case 'updateText':
      return ({
        color: theme.textPrimary,
      })
    case 'button':
      return ({
        paddingLeft: 15,
      })
  }
}

// const getStyle = (theme, component) => {
//   return styles[component]
// }

// const styles = getStyles(theme)
// const getStyles = theme => (
//   StyleSheet.create({
//     bottomContainer: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'space-around',
//       flexDirection: 'row',
//       width: '100%',
//       backgroundColor: theme.primary,
//     },
//     updateText: {
//       color: theme.textPrimary,
//     },
//     button: {
//       paddingLeft: 15,
//     },
//   })
// )


export default BottomContainer
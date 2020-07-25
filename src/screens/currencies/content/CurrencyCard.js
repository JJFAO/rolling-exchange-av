import React from 'react'
import { View, Text, Image } from 'react-native'

import flags from '../../../constants/flags'
import { getCurrencySymbol, getCurrencyName, getExchange } from '../../../utils/currencyFunctions'

const CurrencyCard = ({ name, flag, appTheme, amount, fromCurrency }) => {
  let url = ''
  switch(flag) {
    case 'ars':
      url = flags.ars
      break
    case 'eur':
      url = flags.eur
      break
    case 'jpy':
      url = flags.jpy
      break
    case 'usd':
      url = flags.usd
      break
  }

  return(
    <View style={getStyle(appTheme, 'card')}>
      <View style={getStyle(appTheme, 'leftContainer')}>
        <Image
          source={url}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text style={getStyle(appTheme, 'text')}>{name}</Text>
      </View>
      <View style={getStyle(appTheme, 'rightContainer')}>
        {
          amount !== '' ?
            <>
              <Text style={getStyle(appTheme, 'text')}>{getCurrencySymbol(flag)} {getExchange(fromCurrency, flag, amount)}</Text>
              <Text style={getStyle(appTheme, 'text')}>{getCurrencyName(flag)}</Text>
            </>
          :
            null
        }
      </View>
    </View>
  )
}

const getStyle = (theme, component) => {
  switch(component) {
    case 'card':
      return({
        backgroundColor: theme.container,
        width: '90%',
        padding: 25,
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      })
    case 'text':
      return({
        color: theme.textPrimary,
      })
    case 'leftContainer':
      return({
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
      })
    case 'rightContainer':
      return({
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
      })
  }
}

export default CurrencyCard
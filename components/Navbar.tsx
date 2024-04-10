import { View, StyleSheet} from 'react-native'
import React from 'react'
import { colors } from '../assets/theme/colors'

export const Navbar = () => {
  return (
    <View >
        <View style={{borderRadius:40,
        backgroundColor:colors.darkBlue,
        width:335,
        height:85,
        shadowColor:colors.shadow,
        shadowOpacity:20,
        marginLeft:10,
        alignSelf:'center',
        marginTop:28,
       
        }}>
        </View>
    </View>
  )
}

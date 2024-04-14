import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React,{ useState} from 'react'
import { Back } from '../icons/SVG'
import { Like } from '../icons/SVG'
import { colors } from '../assets/theme/colors'
import { Cards } from '../components/Cards'
import { Player } from '../components/Player'
import { NoneLike } from '../icons/SVG'

export const MusicScreen = () => {
  const [like,setLike]=useState<boolean>(false);
  const handlePress = () => {
    setLike(!like);
  };
  return (
    <View>
      <View style={styles.root}>
        <Back/>
        <Text numberOfLines={1} style={styles.text}>Ophelia by Steven</Text>
        <TouchableOpacity onPress={handlePress}>
        {like ? <Like/> : <NoneLike />}
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'column',gap:18}}>
      <Cards url='https://www.giorgioguldenaar.nl/wp-content/uploads/2023/10/Tekengebied-1.jpg' xLarge={styles.xLarge} XMusic='Ophelia' XSinger='Steven Price'/>
      </View>
      <Player />
   </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginTop:54,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginRight:19,
    },

    text:{
        color:colors.white,
        fontFamily:'segoeui-bold',
        fontSize:18,
        width:'40%',
    },
    xLarge:{
        width:304,
        height:319,
        marginTop:32,
        alignSelf:'center',
        borderRadius:36
    }
})


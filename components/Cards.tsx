import { View,Image, StyleProp, ImageStyle,Text,StyleSheet} from 'react-native'
import React from 'react'
import {colors} from '../assets/theme/colors'

interface ICard{
    mini?:StyleProp<ImageStyle>
    medium?:StyleProp<ImageStyle>
    large?:StyleProp<ImageStyle>
    xLarge?:StyleProp<ImageStyle>
    url:string
    title?:string
    name?:string
    singer?:string
    view?:string
    XSinger?:string,
    XMusic?:string
}

export const Cards:React.FC<ICard> = ({mini,medium,large,xLarge,url,title,name,singer,view,XSinger,XMusic}) => {
  return (<View >

    <View style={{flexDirection:'row',gap:15}}>
    
      <Image source={{uri:url}} style={mini}/>
      <View style={{flexDirection:'column',gap:5}}>
      <Text style={styles.name}> {name}</Text>
      <Text style={styles.singer}> {singer}</Text>
      <Text style={styles.view}> {view}</Text>
      </View>
      </View>
    
      <View style={{flexDirection:'column',gap:6}}>
      <Image source={{uri:url}} style={medium}/>
      <Text style={styles.title}> {title}</Text>
      </View>
       <View>
      <Image source={{uri:url}} style={large}/>
      </View>
      <View style={{gap:18}}>
      <Image source={{uri:url}} style={xLarge}/>
      <View style={{gap:7}}>
      <Text style={styles.XMusic}> {XMusic}</Text>
      <Text style={styles.XSinger}> {XSinger}</Text>
      </View>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        color: colors.white,
        fontFamily:'nunito-regular',
        fontSize:14,
        alignItems:'center'
    },
    name:{
        color:colors.white,
        fontFamily:'nunito-regular',
        fontSize:17
    },
    singer:{
        fontFamily:'nunito-regular',
        fontSize:13,
        color:colors.white
    },
    view:{
        fontFamily:'nunito-regular',
        fontSize:13,
        color:colors.white

    },
    XMusic:{
      fontFamily:'nunito-regular',
      fontSize:24,
      color:colors.white,
      alignSelf:'center'
    },
    XSinger:{
      color:colors.grey,
      fontSize:18,
      alignSelf:'center',
      fontFamily:'nunito-regular'
      
    }
})

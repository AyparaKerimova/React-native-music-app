import { View, Text,StyleSheet, Image} from 'react-native'
import React from 'react'
import { colors } from '../assets/theme/colors'

interface IProfile{
    title:string
    email:string
    role:string
    description:string
    url:string
}

export const Profile:React.FC<IProfile> = ({title,email,role,description,url}) => {
  return (
    <View style={styles.root}>
      <Image style={styles.image} source={{uri:url}}/>
      <View style={{gap:11}}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{email}</Text>
      <Text style={styles.info}>{role}</Text>
      <Text numberOfLines={2} style={[styles.info,{width:'70%'}]}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    root:{
        marginTop:46,
        flexDirection:'row',
        marginLeft:21,
        gap:16
    },
    image:{
        width:91,
        height:100,
        borderRadius:10
    },
    title:{
        color:colors.white,
        fontFamily:'nunito-regular',
        fontSize:18
    },
    info:{
        color:colors.grey,
        fontFamily:'nunito-regular',
        fontSize:16
    }
})
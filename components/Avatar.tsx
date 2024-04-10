import { View,Image, StyleSheet,StyleProp, ViewStyle,Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ring } from '../icons/SVG';
import { colors } from '../assets/theme/colors';

interface IAvatar{
    title?:string;
    description?:string; 
    style?: StyleProp<ViewStyle>;
}

export const Avatar:React.FC<IAvatar> = ({title,description,style}) => {
  return (
    <View style={styles.container}>
        <View style={styles.root}>
        <View style={styles.image}>
            <Image style={styles.image} source={{uri:'https://hips.hearstapps.com/hmg-prod/images/nicki_minaj_photo_by_kevin_mazur_wireimage_getty_498353136.jpg'}} />
        </View>
        <View>
        <Text style={styles.title}> {title}</Text>
        <Text style={styles.description}> {description}</Text>
        </View>
        <TouchableOpacity>
        <Ring />
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:21
    },
    root:{
        flexDirection:'row',
        marginTop:55,
        gap:8
    },
    image:{
        width:40,
        height:40,
        borderRadius: 100,
    },
    title:{
        fontFamily:'nunito-semibold',
        color: colors.white,
        fontSize:18

    },
    description:{
        fontFamily:'nunito-regular',
        color:colors.lightGrey,
        fontSize:14
    }
})



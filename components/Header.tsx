import { View, Text,StyleSheet, TextInput} from 'react-native'
import React from 'react'
import { Search } from '../icons/SVG';
import { colors } from '../assets/theme/colors';

interface IHeader{
    title:string;
    description:string
}

export const Header:React.FC<IHeader> = ({title,description}) => {
  return (
    <View style={styles.container}>
     <Text numberOfLines={2} style={styles.title}>{title}</Text>
     <View style={styles.root}>
     <Search />
     <TextInput style={styles.description}>{description}</TextInput>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:24,
        marginLeft:30,
        gap:12
    },
    root:{
        flexDirection:'row',
        gap:20,
        marginTop:12,
        alignItems:'center',
    },
    title:{
        color: colors.white,
        fontFamily:'nunito-semibold',
        fontSize:26,
        width:'50%',
        letterSpacing:-0.24
    },
    description:{
        color: colors.grey,

    }
})
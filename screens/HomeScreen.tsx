import { View,StyleSheet,Text, ScrollView } from 'react-native'
import React from 'react'
import  {Avatar}  from '../components/Avatar'
import { Header} from '../components/Header'
import {Cards} from '../components/Cards'
import { colors } from '../assets/theme/colors'


export const HomeScreen = () => {
  return (
    <View >
      <Avatar title='Aypara Kərimova' description='Gold Member' />
      <Header title="Listen The Latest Musics" description="Search Music"/>
      <View style={styles.container}>
        <Text style={styles.text}> Recently played</Text>
      <ScrollView horizontal >
        <View style={{flexDirection:'row'}}>
      <Cards url='https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952' mini={styles.medium} title='Music Title1'/>
      <Cards url='https://www.giorgioguldenaar.nl/wp-content/uploads/2023/10/Tekengebied-1.jpg' mini={styles.medium} title='Music Title2'/>
      <Cards url='https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952' mini={styles.medium} title='Music Title3'/>
      <Cards url='https://www.giorgioguldenaar.nl/wp-content/uploads/2023/10/Tekengebied-1.jpg' mini={styles.medium} title='Music Title4'/>
      <Cards url='https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952' mini={styles.medium} title='Music Title5'/>
        </View>   
      </ScrollView>
     </View>
     <View style={{gap:18}}>
     <Text style={{color:colors.white,marginLeft:21,fontFamily:'nunito-semibold',fontSize:18}}>Recommended for you</Text>
     <ScrollView >
     <View style={{flexDirection:'column',marginLeft:21,gap:-100}}>
     <Cards url='https://www.giorgioguldenaar.nl/wp-content/uploads/2023/10/Tekengebied-1.jpg' mini={styles.mini} name='Music Title1' singer='singer1' view='114k'/>
      <Cards url='https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952' mini={styles.mini} name='Music Title2' singer='singer2' view='11k'/>
      <Cards url='https://hips.hearstapps.com/hmg-prod/images/7-64ecb1c909b78.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*' mini={styles.mini} name='Music Title3' singer='singer3' view='12k'/>
      <Cards url='https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201698245952' mini={styles.mini} name='Music Title4' singer='singer4' view='210k'/>
      <Cards url='https://www.giorgioguldenaar.nl/wp-content/uploads/2023/10/Tekengebied-1.jpg' mini={styles.mini} name='Music Title5' singer='singer5' view='13k'/>
      <Cards url='https://hips.hearstapps.com/hmg-prod/images/7-64ecb1c909b78.png?crop=0.502xw:1.00xh;0.498xw,0&resize=1200:*' mini={styles.mini} name='Music Title4' singer='singer6' view='21k'/>
      </View>
      </ScrollView>
     </View>
  
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:44,
        gap:17,
        marginLeft:21
    },
    mini:{
        width:88,
        height:88,
        borderRadius:10,
    },
    medium:{
        width:101,
        height:81,
        borderRadius:10

    },
    large:{

    },
    xLarge:{

    },
    text:{
        fontFamily:'nunito-semibold',
        fontSize:22,
        color: colors.white
    }
})

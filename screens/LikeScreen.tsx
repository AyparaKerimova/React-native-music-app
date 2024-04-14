import { View, Text,StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { Back } from '../icons/SVG'
import { Profile } from '../components/Profile'
import { colors } from '../assets/theme/colors'
import { Cards } from '../components/Cards'


export const LikeScreen = () => {
    const songs =[{
        id:1,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:2,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:3,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:4,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:5,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:6,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },
    {
        id:7,
        url:'https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1'
    },

]
  return (
    <View style={styles.container}>
      <Back/>
      <Profile url='https://variety.com/wp-content/uploads/2015/12/gravity-falls.jpg?w=1000' title=' Aypara Kərimova' email='ayparakerimova004@gmail.com' role='Gold Member' description='Love Music and I am not an Musician.'/>
      <View style={styles.albums}>
      <Text style={styles.text}> Favourite Album</Text>
      <ScrollView horizontal >
       <View style={{flexDirection:'row',gap:9}}>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        <Cards url='https://decider.com/wp-content/uploads/2016/10/gravity-falls-cult-corner.jpg?quality=75&strip=all&w=978&h=652&crop=1' large={styles.large}/>
        </View>
      </ScrollView>

      </View>
      <View style={[styles.musics,{gap:9}]}>
      <Text style={styles.text}> Favourite Music</Text>
      <ScrollView  >
       <View style={styles.musics}>
        {
            songs.map((item)=> <Cards url={item.url} large={styles.large}/>)
        }
        </View>
      </ScrollView>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:21,
        marginTop:54
    },
    albums:{
        marginTop:72,
        gap:-66
    },
    text:{
        color:colors.white,
        fontSize:18,
        fontFamily:'nunito-semibold'
    },
    large:{
        width:106,
        height:111,
        borderRadius:10
    },
    musics:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap',
        gap:9
    }
})

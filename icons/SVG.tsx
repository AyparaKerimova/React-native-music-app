import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../assets/theme/colors';

export const Ring = () => {
  return (
    <View style={styles.ring}>
      <Svg width={22} height={25} viewBox="0 0 22 25">
        <Path fill={colors.elephant} fillRule="evenodd" clipRule="evenodd" d="M11 0C15.2518 0 18.6985 3.52481 18.6985 7.87289C18.6985 11.0352 19.2405 13.4401 20.1355 15.1973C20.4434 15.8017 20.7713 16.2832 21.0979 16.655L21.1908 16.758L21.3507 16.9215C21.3743 16.9441 21.3961 16.9644 21.4161 16.9824L21.5259 17.0717C22.3749 17.6752 22.008 19.0076 21.0243 19.1132L20.8981 19.1199H1.10182C0.0572017 19.1199 -0.378385 17.7898 0.389472 17.1373L0.516486 17.0407L0.603714 16.9644L0.736848 16.8338C0.762564 16.8073 0.789969 16.7785 0.818952 16.7472C1.1409 16.3997 1.47119 15.938 1.78601 15.3478C2.67925 13.6731 3.24298 11.3776 3.29713 8.35602L3.30141 7.87289C3.30141 3.52481 6.74818 0 11 0ZM12.9026 21.3693C13.7503 21.3693 14.2793 22.3085 13.854 23.0583C13.2637 24.0989 12.1763 24.7394 11 24.7394C9.82365 24.7394 8.73628 24.0989 8.14603 23.0583C7.74198 22.346 8.19921 21.4627 8.97268 21.3762L9.09735 21.3693H12.9026ZM5.50608 7.62893C5.63098 4.63633 8.0429 2.24938 11 2.24938C14.037 2.24938 16.499 4.7671 16.499 7.87287C16.499 11.3871 17.1212 14.1486 18.1847 16.2365L18.3559 16.5597L18.4436 16.7156L18.5347 16.8705H3.46418L3.56501 16.7011L3.71702 16.4249C4.83888 14.3216 5.501 11.5003 5.501 7.87287L5.50608 7.62893Z" />
      </Svg>
    </View>
  );
};


export const Search = () => {
    return (
        <View style={styles.search}>
          <Svg width={18} height={18} viewBox="0 0 18 18">
            <Path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#8E8E8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M15.75 15.75L12.4875 12.4875" stroke="#8E8E8E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
        </View>
      );
    };

export const Back= () => {
    return (
        <View style={styles.back}>
          <Svg width="22" height="24" viewBox="0 0 22 24" fill="none">
<Path d="M17.176 12H4.52002" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.848 19L4.52002 12L10.848 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

        </View>
      );
    };

export const Like = () => {
    return (
        <View style={styles.like}>
          <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" >
<Path d="M18.8393 4.61C18.3776 4.099 17.8294 3.69365 17.226 3.41708C16.6226 3.14052 15.9759 2.99817 15.3228 2.99817C14.6697 2.99817 14.0229 3.14052 13.4195 3.41708C12.8162 3.69365 12.268 4.099 11.8062 4.61L10.848 5.67L9.88975 4.61C8.9571 3.57831 7.69216 2.99871 6.37319 2.99871C5.05423 2.99871 3.78928 3.57831 2.85663 4.61C1.92398 5.64169 1.40002 7.04097 1.40002 8.5C1.40002 9.95903 1.92398 11.3583 2.85663 12.39L3.81487 13.45L10.848 21.23L17.8811 13.45L18.8393 12.39C19.3013 11.8792 19.6677 11.2728 19.9177 10.6054C20.1678 9.9379 20.2964 9.22249 20.2964 8.5C20.2964 7.77751 20.1678 7.0621 19.9177 6.39464C19.6677 5.72719 19.3013 5.12076 18.8393 4.61Z" fill="#8E8E8E" stroke="#8E8E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>



</Svg>
        </View>
      );
    };
    export const NoneLike = () => {
      return (
          <View style={styles.like}>
            <Svg width="22" height="24" viewBox="0 0 22 24" fill="none" >
  <Path d="M18.8393 4.61C18.3776 4.099 17.8294 3.69365 17.226 3.41708C16.6226 3.14052 15.9759 2.99817 15.3228 2.99817C14.6697 2.99817 14.0229 3.14052 13.4195 3.41708C12.8162 3.69365 12.268 4.099 11.8062 4.61L10.848 5.67L9.88975 4.61C8.9571 3.57831 7.69216 2.99871 6.37319 2.99871C5.05423 2.99871 3.78928 3.57831 2.85663 4.61C1.92398 5.64169 1.40002 7.04097 1.40002 8.5C1.40002 9.95903 1.92398 11.3583 2.85663 12.39L3.81487 13.45L10.848 21.23L17.8811 13.45L18.8393 12.39C19.3013 11.8792 19.6677 11.2728 19.9177 10.6054C20.1678 9.9379 20.2964 9.22249 20.2964 8.5C20.2964 7.77751 20.1678 7.0621 19.9177 6.39464C19.6677 5.72719 19.3013 5.12076 18.8393 4.61Z" fill="none" stroke="#8E8E8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  
  
  
  </Svg>
          </View>
        );
      };

export const Shuffle = () => {
      return (
        <View style={styles.shuffle}>
          <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
<Path d="M16.3926 3H21.5153V8" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.09814 20L21.5153 3" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M21.5153 16V21H16.3926" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15.3681 15L21.5153 21" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.09814 4L9.22084 9" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
        </View>
      );
    };
    export const GreenShuffle = () => {
      return (
        <View style={styles.greenshuffle}>
          <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
<Path d="M16.3926 3H21.5153V8" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.09814 20L21.5153 3" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M21.5153 16V21H16.3926" stroke="green"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15.3681 15L21.5153 21" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M4.09814 4L9.22084 9" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
        </View>
      );
    };
  
export const SkipBack= () => {
      return (
        <View style={styles.skipback}>
          <Svg width="26" height="24" viewBox="0 0 26 24" fill="none" >
<Path d="M20.0123 20L9.76691 12L20.0123 4V20Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5.6687 19V5" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

        </View>
      );
    };
  
export const SkipForward= () => {
      return (
        <View style={styles.skipforward}>
        <Svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M5.98773 4L16.2331 12L5.98773 20V4Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M20.3313 5V19" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>


        </View>
      );
    };

export const Pause= () => {
      return (
        <View style={styles.pause}>
      <Svg width="43" height="41" viewBox="0 0 43 41" fill="none" >
<Path d="M17.9872 6.83331H10.9862V34.1666H17.9872V6.83331Z" stroke="#F2F2F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M31.9892 6.83331H24.9882V34.1666H31.9892V6.83331Z" stroke="#F2F2F2" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
</View>
      );
    };

export const Repeat= () => {
      return (
        <View style={styles.repeat}>
      <Svg width="25" height="24" viewBox="0 0 25 24" fill="none">
<Path d="M17.8282 1L21.9263 5L17.8282 9" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M3.48462 11V9C3.48462 7.93913 3.91639 6.92172 4.68494 6.17157C5.4535 5.42143 6.49588 5 7.58278 5H21.9263" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M7.58278 23L3.48462 19L7.58278 15" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M21.9263 13V15C21.9263 16.0609 21.4946 17.0783 20.726 17.8284C19.9575 18.5786 18.9151 19 17.8282 19H3.48462" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>

</View>
      );
    };

export const Play= () => {
      return (
        <View style={styles.play}>
       <Svg viewBox="0 0 24 24" id="play">
        <Path  stroke="#F2F2F2" d="M16,10.27,11,7.38A2,2,0,0,0,8,9.11v5.78a2,2,0,0,0,1,1.73,2,2,0,0,0,2,0l5-2.89a2,2,0,0,0,0-3.46ZM15,12l-5,2.89V9.11L15,12ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
        </Svg>

</View>
      );
    };
  const styles = StyleSheet.create({
      ring: {
        width: 22,
        height: 25,
        marginLeft:152
      },
      search:{
        width:18,
        height:18
      },
      back:{
        color:colors.white,
      },
      like:{

      },
      shuffle:{
        color:colors.white,
      },
      skipback:{

      },
      skipforward:{
        
      },
      pause:{
        position:'absolute',
        alignSelf:'center',
        marginTop:-55,
      },
      repeat:{
        
      },
      play:{
        width:40,
        height:40,
        position:'absolute',
        alignSelf:'center',
        marginTop:-55
      },
      greenshuffle:{
        color:'green'
      }
    })

    
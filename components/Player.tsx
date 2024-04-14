import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../assets/theme/colors'
import { Shuffle } from '../icons/SVG'
import { SkipBack } from '../icons/SVG'
import { SkipForward } from '../icons/SVG'
import { Pause } from '../icons/SVG'
import { Repeat } from '../icons/SVG'
import { Play } from '../icons/SVG'
import { GreenShuffle } from '../icons/SVG'

export const Player = () => {
  const timePlayer = (time: number) => {
    const minute = Math.floor(time / 60)
    const second = time % 60

    return (`${minute}:${second}`)
  }

  const runTimePlayer = (runTime: number) => {
    const minute = Math.floor(runTime / 60)
    const second = runTime % 60
    return (`${minute}:${second}`)
  }

  const [play, setPlay] = useState<boolean>(false);

  const handlePress = () => {
    setPlay(!play);
  };
  const [shuffle, setShuffle] = useState<boolean>(false);

  const handlePressShuffle = () => {
    setShuffle(!shuffle);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stick}></View>
      <View style={styles.playedStick}></View>
      <View style={styles.time}>
        <Text style={{ color: colors.white }}> {runTimePlayer(110)}</Text>
        <Text style={{ color: colors.white }}> {timePlayer(160)}</Text>
      </View>
      <View style={styles.customizePlayer}>
        <TouchableOpacity onPress={handlePressShuffle}>
        {shuffle ? <Shuffle /> : <GreenShuffle />}
        </TouchableOpacity>
        <SkipBack />
        <View >
          <View style={styles.circle} />
          <TouchableOpacity onPress={handlePress}>
            {play ? <Pause /> : <Play />}
          </TouchableOpacity>
        </View>
        <SkipForward />
        <Repeat />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    marginLeft: 22,
    gap: 5
  },
  stick: {
    width: 435,
    height: 3,
    backgroundColor: colors.white,
    borderRadius: 10
  },
  playedStick: {
    width: 300,
    height: 3,
    backgroundColor: colors.purple,

    position: 'absolute'
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: colors.white,
  },
  customizePlayer: {
    flexDirection: 'row',
    marginTop: 34,
    gap: 40,
    marginLeft: 21
  },
  circle: {
    width: 75,
    height: 74,
    backgroundColor: colors.purple,
    borderRadius: 100,
    marginTop: -21,
  }
})
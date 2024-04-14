/** @format */

import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { Back } from "../icons/SVG";
import { Profile } from "../components/Profile";
import { colors } from "../assets/theme/colors";
import { Cards } from "../components/Cards";
import { FlashList } from "@shopify/flash-list";
import { songs } from "../mock/songs";

export const LikeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.container}>
        <Back />
        <View style={styles.profileContainer}>
          <Profile
            url="https://variety.com/wp-content/uploads/2015/12/gravity-falls.jpg?w=1000"
            title=" Aypara Kərimova"
            email="ayparakerimova004@gmail.com"
            role="Gold Member"
            description="Love Music and I am not an Musician."
          />
        </View>
        <ScrollView style={{ paddingTop: 72 }} horizontal>
          <FlashList
            horizontal
            scrollEnabled={false}
            data={songs}
            renderItem={({ item }) => (
              <Cards title={item.title} url={item.url} />
            )}
            estimatedItemSize={200}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={styles.flashGapHorizontal} />
            )}
          />
        </ScrollView>
        <View style={{ paddingTop: 74 }}>
          <FlashList
            scrollEnabled={false}
            data={songs}
            numColumns={3}
            renderItem={({ item }) => <Cards url={item.url} />}
            estimatedItemSize={200}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={styles.flashGapVertical} />
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "green",
  },
  container: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
    // marginLeft: 21,
    // marginTop: 54,
  },

  profileContainer: {
    paddingTop: 24,
    // backgroundColor: "pink",
  },

  flashGapHorizontal: {
    width: 9,
  },

  flashGapVertical: {
    height: 9,
  },
  //   albums: {
  //     marginTop: 72,
  //     // gap: -66,
  //   },
  //   text: {
  //     color: colors.white,
  //     fontSize: 18,
  //     fontFamily: "nunito-semibold",
  //   },
  //   large: {
  //     width: 106,
  //     height: 111,
  //     borderRadius: 10,
  //   },
  //   musics: {
  //     flex: 1,
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     gap: 9,
  //   },
});

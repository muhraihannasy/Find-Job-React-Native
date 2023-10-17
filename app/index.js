import React from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";

import { COLORS, SIZES, icons, images } from "../constants";
import Welcome from "../components/home/welcome/Welcome";
import Nearby from "../components/home/nearby/Nearby";
import Popular from "../components/home/popular/Popular";

function Home() {
  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
          ),
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popular />
          <Nearby />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;

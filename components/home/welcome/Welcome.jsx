import { useState } from "react";

import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { SIZES, icons } from "../../../constants";

import styles from "./Welcome.style";

const jobTypes = ["Full-time", "Part-time", "Contractor"];

function Welcome() {
  const [activeJobType, setActiveJobType] = useState("Full-time");

  console.log(activeJobType);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Raihan</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for ?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export default Welcome;

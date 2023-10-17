import { View, TouchableOpacity, Text } from "react-native";

import styles from "./Popular.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { useState } from "react/cjs/react.production.min";

const data = [1, 2, 3, 4];
function Popular() {
  const [selectedJob, setSelectedJob] = useState(null);

  function handleCardPress(item) {
    setSelectedJob(item.id);
  }

  return (
    <View style={styles.container}>
      <View stlye={styles.header}>
        <Text stlye={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text stlye={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View stlye={styles.cardsContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <PopularJobCard
              item={item}
              selectedJob={selectedJob}
              handlePressCard={handleCardPress}
            />
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

export default Popular;

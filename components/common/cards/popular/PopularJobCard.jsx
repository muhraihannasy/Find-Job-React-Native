import { Image, TouchableOpacity, View } from "react-native";

import styles from "./PopularJobCard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={style.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity>
        <Image source="" resizeMode="contain" style={styles.logoImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default PopularJobCard;

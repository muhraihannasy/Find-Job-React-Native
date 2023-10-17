import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: COLORS.white,
    alignItems: "center",
    marginRight: SIZES.small,
    height: "100%",
    borderRadius: SIZES.small,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.small,
  },
  tab: (activeJobType, item) => ({
    paddingHorizontal: SIZES.xxLarge,
    paddingVertical: SIZES.small,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
    borderWidth: 1,
    borderRadius: SIZES.small,
  }),
  tabText: (activeJobType, item) => ({
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});

export default styles;

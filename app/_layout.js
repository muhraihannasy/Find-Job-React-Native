import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";

function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!fontsLoaded) return null;

  return <Stack>{/* <Stack.Screen name="home" /> */}</Stack>;
}

export default Layout;

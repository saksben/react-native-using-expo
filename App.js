import { useCallback } from "react";
import { setStatusBarBackgroundColor, StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Platform } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Prevents splashscreen until preventHideAsync is called
const App = () => {
  const pie1 = require("./assets/images/shutterstock_1528835303.jpg");
  setStatusBarBackgroundColor("#3361FF", false);
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    "Alkatra-Regular": require("./assets/fonts/Alkatra-Regular.ttf"),
    "Alkatra-Bold": require("./assets/fonts/Alkatra-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.imageView}>
        <Image source={pie1} style={styles.imageStyle} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bethany's Pie Shop</Text>
        <Text style={styles.slogan}></Text>
      </View>

      <StatusBar style="light" translucent={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageView: {
    flex: 5,
  },
  imageStyle: {
    flex: 1,
    ...Platform.select({
      android: {
        resizeMode: "contain",
      },
      ios: {
        resizeMode: "contain",
      },
      default: {
        resizeMode: "cover",
      },
    }),
  },
  titleContainer: {
    flex: 3,
    alignItelms: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Alkatra-Bold",
  },
  slogan: {
    fontSize: 20,
    fontFamily: "RobotoCondensed-Regular",
  },
});

export default App;

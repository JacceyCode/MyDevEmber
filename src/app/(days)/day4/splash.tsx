import { useRef } from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";

const SplashScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <LottieView
        ref={animation}
        autoPlay
        style={{ width: "80%", maxWidth: 400 }}
        source={require("@assets/lottie/netflix.json")}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

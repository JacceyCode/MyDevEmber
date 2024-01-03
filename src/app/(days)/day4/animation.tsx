import { Button, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";

const AnimationScreen = () => {
  const animation = useRef<LottieView>(null);

  return (
    <View style={styles.container}>
      <LottieView
        ref={animation}
        style={{ width: 200, height: 200, backgroundColor: "#eee" }}
        source={require("@assets/lottie/netflix.json")}
      />

      <Button title="Play" onPress={() => animation.current?.play()} />
      <Button title="Pause" onPress={() => animation.current?.pause()} />
      <Button title="Reset" onPress={() => animation.current?.reset()} />
    </View>
  );
};

export default AnimationScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    flex: 1,
  },
});

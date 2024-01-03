import { Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

const AirbnbScreen = () => {
  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView style={styles.map} />
    </View>
  );
};

export default AirbnbScreen;

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

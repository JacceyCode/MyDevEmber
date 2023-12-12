import { Stack } from "expo-router";
import { View, Text } from "react-native";

function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text>Day Details Screen</Text>
    </View>
  );
}

export default DayDetailsScreen;

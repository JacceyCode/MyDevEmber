import { Stack } from "expo-router";
import { View, Text } from "react-native";

function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 1" }} />
      <Text style={{ fontFamily: "AmaticBold", fontSize: 70 }}>
        Day Details Screen
      </Text>
    </View>
  );
}

export default DayDetailsScreen;

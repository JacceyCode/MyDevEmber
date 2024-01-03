import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding Screen" }} />
      <Text
        style={{ fontFamily: "AmaticBold", fontSize: 30, textAlign: "center" }}
      >
        Day Details Screen
      </Text>

      <Link href={"/day2/onboarding"} asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
}

export default DayDetailsScreen;

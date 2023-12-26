import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 3: Markdown" }} />
      <Text
        style={{ fontFamily: "AmaticBold", fontSize: 30, textAlign: "center" }}
      >
        Day Details Screen
      </Text>

      <Link href={"/day3/editor"} asChild>
        <Button title="Go to editor" />
      </Link>
    </View>
  );
}

export default DayDetailsScreen;

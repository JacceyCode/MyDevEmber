import { Link, Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# AirBNB Map
`;

function DayDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 5: Maps" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day5/airbnb"} asChild>
        <Button title="Go to AirBNB Map" />
      </Link>
    </SafeAreaView>
  );
}

export default DayDetailsScreen;

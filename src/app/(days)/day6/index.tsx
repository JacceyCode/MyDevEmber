import { Link, Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Tinder Swipe Animation

Let's build the Tinder Swipe Animation in React Native using Reanimated!
`;

function DayDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 6: Tinder" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day6/tinder"} asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
}

export default DayDetailsScreen;

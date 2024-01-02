import { Link, Stack } from "expo-router";
import { SafeAreaView, Button } from "react-native";
import MarkdownDisplay from "@/components/day3/MarkdownDisplay";

const description = `
# Animated Splash Screen
`;

function DayDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Day 4: SplashScreen" }} />

      <MarkdownDisplay>{description}</MarkdownDisplay>

      <Link href={"/day4/animation"} asChild>
        <Button title="Go to animation screen" />
      </Link>

      <Link href={"/day4/splash"} asChild>
        <Button title="Splash screen animation" />
      </Link>
    </SafeAreaView>
  );
}

export default DayDetailsScreen;

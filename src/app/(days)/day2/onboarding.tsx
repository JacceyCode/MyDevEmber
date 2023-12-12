import { Stack, router } from "expo-router";
import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";

import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome To #MyDevEmber",
    description: "Daily React Native tutorials during December",
  },
  {
    icon: "people-arrows",
    title: "Learn and grow together",
    description:
      "Learn and grow by building 24 projects with React Native and Expo",
  },
  {
    icon: "book-reader",
    title: "Education for children",
    description:
      'Contribute to the fundraiser "Education for Children" to help save the Children in their effort to get quality education.',
  },
];

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);

  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBack = () => {
    const isFirstScreen = screenIndex === 0;
    if (isFirstScreen) {
      setScreenIndex(onboardingSteps.length - 1);
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const endOnboarding = () => {
    // setScreenIndex(0);
    router.back();
  };

  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(onContinue);

  const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBack);

  const swipes = Gesture.Simultaneous(swipeBackward, swipeForward);

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            style={[
              styles.stepIndicator,
              {
                backgroundColor: index === screenIndex ? "#CEF202" : "gray",
              },
            ]}
            key={index}
          />
        ))}
      </View>

      <GestureDetector gesture={swipes}>
        <View key={screenIndex} style={styles.pageContent}>
          <Animated.View
            entering={SlideInLeft.duration(1000)}
            exiting={SlideOutRight}
          >
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#CEF202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.Text
              entering={SlideInRight.delay(150)}
              exiting={SlideOutLeft}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>

            <Animated.Text
              entering={SlideInRight.delay(200)}
              exiting={SlideOutLeft}
              style={styles.description}
            >
              {data.description}
            </Animated.Text>

            <View style={styles.buttonsRow}>
              <Text onPress={endOnboarding} style={styles.buttonText}>
                Skip
              </Text>

              <Pressable onPress={onContinue} style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#15141a",
  },
  pageContent: {
    padding: 20,
    flex: 1,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 70,
  },
  title: {
    color: "#fdfdfd",
    fontSize: 50,
    fontFamily: "AmaticBold",
    letterSpacing: 10,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 20,
    fontFamily: "Amatic",
    lineHeight: 28,
  },
  footer: {
    marginTop: "auto",
  },
  buttonsRow: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  button: {
    backgroundColor: "#302e35",
    borderRadius: 50,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#fdfdfd",
    fontFamily: "Amatic",
    fontSize: 20,
    padding: 10,
    paddingHorizontal: 20,
  },

  // steps
  stepIndicatorContainer: {
    flexDirection: "row",
    marginTop: 50,
    gap: 5,
    paddingHorizontal: 20,
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    backgroundColor: "gray",
    // margin: 5,
    borderRadius: 10,
  },
});

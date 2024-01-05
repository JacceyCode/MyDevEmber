import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { AVPlaybackStatus, Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const MemoListItem = ({ uri }: { uri: string }) => {
  const [sound, setSound] = useState<Sound>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  async function loadSound() {
    // console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      { uri },
      { progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  }

  useEffect(() => {
    loadSound();
  }, [uri]);

  async function onPlaybackStatusUpdate(newStatus: AVPlaybackStatus) {
    setStatus(newStatus);

    if (!newStatus.isLoaded) {
      return;
    }

    if (newStatus.didJustFinish) {
      await sound?.setPositionAsync(0);
    }
  }

  async function playSound() {
    if (!sound) {
      return;
    }

    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.replayAsync();
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          //   console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const formatMilliSecs = (millis: number) => {
    const minutes = Math.floor(millis / (1000 * 60));
    const seconds = Math.floor((millis % (1000 * 60)) / 1000);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const isPlaying = status?.isLoaded ? status.isPlaying : false;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;

  const progress = position / duration;

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: `${progress * 100}%`,
    // withTiming(`${progress * 100}%`, {
    //   duration: (status?.isLoaded && status.progressUpdateIntervalMillis) || 0,
    // }),
  }));

  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={playSound}
        name={isPlaying ? "pause" : "play"}
        size={20}
        color={"gray"}
      />

      <View style={styles.playbackContainer}>
        <View style={styles.playbackBackground} />
        <Animated.View
          style={[styles.playbackIndicator, animatedIndicatorStyle]}
        />

        <Text
          style={{
            position: "absolute",
            right: 0,
            bottom: 0,
            color: "gray",
            fontFamily: "Inter",
            fontSize: 12,
          }}
        >
          {formatMilliSecs(position || 0)} / {formatMilliSecs(duration || 0)}
        </Text>
      </View>
    </View>
  );
};

export default MemoListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 15,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  playbackContainer: {
    flex: 1,
    height: 50,
    justifyContent: "center",
  },
  playbackBackground: {
    height: 3,
    backgroundColor: "gainsboro",
    borderRadius: 5,
  },
  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "royalblue",
    position: "absolute",
  },
});

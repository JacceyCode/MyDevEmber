import { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "assets/data/day5/apartments.json";
import CustomeMarker from "@/components/day5/CustomMarker";
import ApartmentListItem from "@/components/day5/ApartmentListItem";
import BottomSheet from "@gorhom/bottom-sheet";

const AirbnbScreen = () => {
  const [selectedApartment, setSelectedApartment] = useState(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {apartments.map((apartment) => (
          <CustomeMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>

      {/* Display selected apartment */}
      {selectedApartment && <ApartmentListItem apartment={selectedApartment} />}

      {/* Display Botton Sheet */}

      <BottomSheet
        // ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        // onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <FlatList
            data={apartments}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
          />
        </View>
      </BottomSheet>
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

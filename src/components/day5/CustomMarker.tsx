import { Text, View } from "react-native";
import { Marker } from "react-native-maps";

const CustomeMarker = ({ apartment, onPress }) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 3,
          paddingHorizontal: 5,
          borderWidth: 1,
          borderColor: "gray",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontFamily: "InterBold" }}>${apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomeMarker;

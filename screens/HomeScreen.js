import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { store } from "../store/store";
import navSlice, { selectDestination, setOrigin } from "../store/navSlice";
import { useDispatch } from "react-redux";
import NavFavourite from "../components/NavFavourite";

const HomeScreen = () => {
  const dispatch = useDispatch();
  // console.log(navSlice);
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          // source={{ uri: "https://links.papareact.com/wru" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          query={{ key: GOOGLE_MAPS_APIKEY, language: "en" }}
          onPress={(data, details = null) => {
            // console.log(details);
            // console.log(data);
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            // dispatch(selectDestination(null));
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType="search"
          minLength={2}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />

        <NavOptions />
        <NavFavourite />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

import React, { useState, useEffect } from "react";
import formsStyles from "../style-documents/forms-styling";
import { getVenues } from "../utils/api-requests";
import { View } from 'react-native';
import {Picker, PickerIOS} from '@react-native-picker/picker'

export default function PickerForVenue({ currentVenue = "", setVenuesLoading }) {
  const [venue, setVenue] = useState(currentVenue);
  const [ArrayOfVenues, setArrayOfVenues] = useState([]);

  useEffect(() => {
    getVenues().then((res) => {
      setArrayOfVenues(res);
      setVenuesLoading(false);
    });
  }, []);

  if (Platform.OS === "ios") {
    return (
      <View style={formsStyles.dropdownsContainer}>
        <PickerIOS
          selectedValue={venue}
          style={formsStyles.dropdown}
          onValueChange={(itemValue) => setVenue(itemValue)}
        >
          <Picker.Item label="venue" value={""} />
          {ArrayOfVenues.map((venue) => {
            return (
              <Picker.Item
                key={venue._id}
                label={venue.venue_name}
                value={venue._id}
              />
            );
          })}
        </PickerIOS>
      </View>
    );
  } else {
    return (
      <View style={formsStyles.dropdownsContainer}>
        <Picker
          selectedValue={venue}
          style={formsStyles.dropdown}
          onValueChange={(itemValue, itemIndex) => setVenue(itemValue)}
        >
          <Picker.Item label="venue" value={undefined} />
          {ArrayOfVenues.map((venue) => {
            return (
              <Picker.Item
                key={venue._id}
                label={venue.venue_name}
                value={venue._id}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}
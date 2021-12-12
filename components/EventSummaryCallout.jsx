import React from 'react';
import { Button, Text, View} from 'react-native';
import mainScreenStyles from '../style-documents/main-screen-styling';

export default function EventSummaryCallout({ event }) {
  return (
    <View style={mainScreenStyles.EventSummaryCalloutView} >
      { event ? <>
      <Text style={mainScreenStyles.EventSummaryCalloutHeader} >{event['event_name']}</Text>
      <Text>at {event['venue_info'][0]['venue_name']}</Text>
      <Text>{event['time_start'].substring(11,16)} - {event['time_end'].substring(11,16)}</Text>
      <Text>{event['entry_price'] === 0 ? 'Free entry' : "£" + event['entry_price'] }</Text>
      </>
      : <Text>No event information found</Text> }
    </View>
  );
}
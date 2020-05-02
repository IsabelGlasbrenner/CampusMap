import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";
import { Icon } from "react-native-vector-icons";
import FAB from "react-native-fab";

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;



export default class AddItem extends React.Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text> YAY ADDITEM</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'flex-end',
		alignItems: 'center'
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0
	}
});

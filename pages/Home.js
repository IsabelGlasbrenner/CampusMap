import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;

export default function Home() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: 43.0714415,
					longitude: -89.4108079,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<MapView.Marker
					coordinate={latlng}
					title={"hello"}
					description={"descrip"}
				/>
			</MapView>
		</View>
	);
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

import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';

const instructions = Platform.select({
	ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
	android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

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
			/>
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

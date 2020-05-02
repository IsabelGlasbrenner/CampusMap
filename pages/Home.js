import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;



export default class Home extends React.Component {
	render() {
		const { navigate } = this.props.navigation;

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
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('AddItem')}>
				</ActionButton>
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
	},
	actionButtonIcon: {
		fontSize: 20,
		height: 22,
		color: 'white',
	},
});
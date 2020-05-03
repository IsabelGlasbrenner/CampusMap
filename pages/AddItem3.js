import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";
import { Icon } from "react-native-vector-icons";
import FAB from "react-native-fab";
import { TextInput, Button, Picker } from 'react-native';

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;


export default class AddItem2 extends React.Component {


	onPress(navigate) {
		console.log(this.state.pickedValue);
		navigate('UWMadison', { typeOfItem: this.state.pickedValue })
	}

	setDestination(coordinates) {
		console.log(coordinates);
	}


	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>

				<Picker
					style={styles.picker}
					selectedValue={(this.state && this.state.pickedValue) || 'Building'}
					onValueChange={(itemValue) => this.setState({ pickedValue: itemValue })}
				>
					<Picker.Item label="Printer" value="Printers" />
					<Picker.Item label="Microwave" value="Microwaves" />
					<Picker.Item label="Restroom" value="Restrooms" />
					<Picker.Item label="Building" value="Buildings" />
				</Picker>

				<Button
					style={styles.button}
					onPress={() => this.onPress(navigate)}
					title="3"
				/>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					<Marker
						ref={(ref) => { this.marker = ref; }}
						draggable
						onDragEnd={(e) => this.setDestination(e.nativeEvent.coordinate)}
						coordinate={latlng}
						position={latlng}
						centerOffset={{ x: -18, y: -60 }}
						anchor={{ x: 0.69, y: 1 }}
					/>
				</MapView>
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
		height: 400,
		left: 0,
		right: 0,
		bottom: 100,
	},
	picker: {
		position: 'absolute',
		top: 30,
		height: 50,
		width: 200
	},
	button: {
		position: 'absolute',
		bottom: 20,
		top: 0,
		width: 300,
		left: 0,
		right: 0,
	}
});

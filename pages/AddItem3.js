import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import { TextInput, Button, Picker } from 'react-native';

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;

let description;
let buildings;
let email;

const initialState = {
	pickedValue: "",
	buildingKey: "",
};

export default class AddItem3 extends React.Component {

	constructor(props) {
		super(props);
		this.state = initialState;
	}

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Step 3',
		};
	};

	setDestination(coordinates) {
		//find the building that this belongs too
		let prevSmallLat = buildings[0].latlng.latitude - coordinates.latitude;
		let prevSmallLng = buildings[0].latlng.longitude - coordinates.longitude;
		let buildingKey;
		for (let i = 0; i < buildings.length; i++) {
			if (buildings[i].latlng.latitude - coordinates.latitude < prevSmallLat && buildings[i].latlng.longitude - coordinates.longitude < prevSmallLng) {
				buildingKey = buildings[i].key;
				prevSmallLat = buildings[i].latlng.latitude - coordinates.latitude;
				prevSmallLng = buildings[i].latlng.longitude - coordinates.longitude;
			}
		}
		this.setState({ buildingKey: buildingKey });
	}

	addDescription(text) {
		description = text;
	}

	render() {
		const { navigate } = this.props.navigation;
		buildings = this.props.navigation.getParam('buildings', []);
		email = this.props.navigation.getParam('email', null);

		async function addItem(navigate, typeOfItem, buildingKey) {
			if (typeOfItem == null) {
				//Picker choice was not changed - default is printer
				typeOfItem = "Printer";
			}
			if (description != null) {
				console.log("email: " + email);
				console.log("type: " + typeOfItem);
				console.log("description: " + description);
				console.log("key: " + buildingKey);
				try {
					const postUtil = await fetch('http://172.220.7.76:8888/utility', {
						method: 'post',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							type: typeOfItem,
							description: description,
							key: buildingKey
						})
					});
					const response = await postUtil.json();
					console.log(response);
				} catch (err) {
					console.log("Error fetching data-----------", err);
				}
				navigate('UWMadison', { typeOfItem: typeOfItem });
			}
		}

		return (
			<View style={styles.container}>
				<Text style={{ width: 300, position: 'absolute', top: 10, left: 140 }}>Pick the item you'd like to add.</Text>
				<Picker
					style={styles.picker}
					selectedValue={(this.state && this.state.pickedValue) || 'Building'}
					onValueChange={(itemValue) => this.setState({ pickedValue: itemValue })}
				>
					<Picker.Item label="Printer" value="Printers" />
					<Picker.Item label="Microwave" value="Microwaves" />
					<Picker.Item label="Restroom" value="Restrooms" />
				</Picker>
				<Text style={{ width: 300, position: 'absolute', top: 120, left: 15 }}>Add a description.</Text>
				<TextInput
					style={styles.input}
					onChangeText={text => this.addDescription(text)}
				/>
				<Text style={{ width: 300, position: 'absolute', bottom: 560, left: 100 }}>Drag and drop the pin at its location.</Text>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0221,
						longitudeDelta: 0.0221,
					}}>
					<Marker
						ref={(ref) => { this.marker = ref; }}
						draggable
						onDragEnd={(e) => this.setDestination(e.nativeEvent.coordinate)}
						coordinate={latlng}
						position={latlng}
					/>
				</MapView>
				<View style={styles.button}>
					<Button
						onPress={() => addItem(navigate, this.state.pickedValue, this.state.buildingKey)}
						color="#c5050c"
						title="ADD MARKER"
					/>
				</View>
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
		backgroundColor: "white",
	},
	map: {
		position: 'absolute',
		left: 0,
		right: 0,
		bottom: 50,
		height: 500,
	},
	button: {
		position: 'absolute',
		left: 0,
		bottom: 4,
		right: 0,
		fontSize: 20,
		borderRadius: 5
	},
	picker: {
		position: 'absolute',
		top: 40,
		left: 100,
		width: 300,
	},
	input: {
		position: 'absolute',
		top: 140,
		left: 0,
		right: 0,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		margin: 10,
		borderRadius: 7
	},


});

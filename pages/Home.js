import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import ActionButton from "react-native-action-button";
import Icon from 'react-native-vector-icons/Ionicons';
import { List } from "react-native-paper";

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;

var mapData = {
	campusBuildings: [],
	allUtilities: [],
	printers: [],
	microwaves: []
};

const initialState = {
	buildings: [],
	campusBuildings: [],
	restrooms: [],
	printers: [],
	microwaves: [],
	loading: true
};

let typeOfItems;

export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state = initialState;
	}

	async componentDidMount() {
		//Have a try and catch block for catching errors.
		try {
			//Assign the promise unresolved first then get the data using the json method. 
			const getBuildings = await fetch('http://172.220.7.76:8888/location/USWISCUWMAD');
			const buildings = await getBuildings.json();
			this.state.buildings = buildings;
			this.filderData();
			this.state.loading = false;
		} catch (err) {
			console.log("Error fetching data-----------", err);
		}
	}

	filderData() {
		let buildings = Object.values(Object.values(this.state.buildings)[1]);
		let campusBuildings = [];
		let restrooms = [];
		let printers = [];
		let microwaves = [];

		console.log("length: " + buildings.length);
		for (let i = 0; i < buildings.length; i++) {
			let building = Object.values(buildings[i]);
			let buildingLatlng = new LatLng();
			buildingLatlng.latitude = building[1];
			buildingLatlng.longitude = building[2];

			let utilities = building[0];

			campusBuildings.push({
				key: building[4],
				buildingName: building[3],
				latlng: buildingLatlng,
			});

			for (let j = 0; j < utilities.length; j++) {
				let utility = Object.values(Object.values(utilities)[j]);
				console.log("hey");
				console.log(utility);
				if (utility[1] == "Microwave") {
					microwaves.push({
						key: utility[0],
						utilityDescription: utility[2],
						latlng: buildingLatlng
					});
					console.log("add a mic");
				} else if (utility[1] == "Printer") {
					printers.push({
						key: utility[0],
						utilityDescription: utility[2],
						latlng: buildingLatlng
					});
					console.log("add a printer");
				} else if (utility[2] == "restroom") {
					restrooms.push({
						key: utility[0],
						utilityDescription: utility[1],
						latlng: buildingLatlng
					});
					console.log("add a restroom");
				}
			}
			this.setState({ loading: false, campusBuildings: campusBuildings, microwaves: microwaves, printers: printers, restrooms: restrooms });
		}
	}

	render() {
		const { navigate } = this.props.navigation;

		typeOfItems = this.props.navigation.getParam('typeOfItem', "Buildings");
		console.log(typeOfItems);

		let view;
		if (this.state.loading) {
			view = <Text>Loading</Text>;
		} else {
			if (typeOfItems == "Printers") {
				view = <MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					{this.state.printers.map(printer => {
						return (
							<Marker
								key={printer.key}
								coordinate={printer.latlng}
								title={"Printer"}
								description={printer.utilityDescription}
							/>
						);
					})
					}
				</MapView>
			} else if (typeOfItems == "Microwaves") {
				view = <MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					{this.state.microwaves.map(microwave => {
						return (
							<Marker
								key={microwave.key}
								coordinate={microwave.latlng}
								title={"Microwave"}
								description={microwave.utilityDescription}
							/>
						);
					})
					}
				</MapView>
			} else if (typeOfItems == "Restrooms") {
				view = <MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					{this.state.restrooms.map((restroom) => {
						return (
							<Marker
								key={restroom.key}
								coordinate={restroom.latlng}
								title={"Restroom"}
								description={restroom.utilityDescription}
							/>
						);
					})
					}
				</MapView>
			} else if (typeOfItems == "Buildings") {
				view = <MapView
					style={styles.map}
					initialRegion={{
						latitude: 43.0714415,
						longitude: -89.4108079,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}>
					{this.state.campusBuildings.map((building) => {
						return (
							<Marker
								key={building.key}
								coordinate={building.latlng}
								title={building.buildingName}
							/>
						);
					})
					}
				</MapView>
			}
		}
		return (
			<View style={styles.container}>
				{view}
				<ActionButton buttonColor="rgba(231,76,60,1)" onPress={() => navigate('AddItem1')}>
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

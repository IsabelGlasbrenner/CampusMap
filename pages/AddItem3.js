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

let type;



export default class AddItem2 extends React.Component {

	onChangeText(typeOfItem) {
		type = typeOfItem;
		console.log(typeOfItem);
	}

	onPress() {
		console.log("PRessed");
		navigate('AddItem3')
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>

				<Picker
					style={{ height: 50, width: 150 }}
					onValueChange={(itemValue) => this.onSelectItem(itemValue)}
				>
					<Picker.Item label="Printer" value="Printer" />
					<Picker.Item label="Microwave" value="Microwave" />
				</Picker>
				<Button
					onPress={() => this.onPress(navigate)}
					color="#841584"
					title="3"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
});

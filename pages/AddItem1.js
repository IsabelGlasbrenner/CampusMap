import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import LatLng from 'react-native-maps';
import { FloatingAction } from "react-native-floating-action";
import { Icon } from "react-native-vector-icons";
import FAB from "react-native-fab";
import { TextInput, Button } from 'react-native';

const latlng = new LatLng();
latlng.latitude = 43.0714415;
latlng.longitude = -89.4108079;



export default class AddItem1 extends React.Component {

	constructor(props) {
		super(props);
	}

	onChangeText(text) {
		console.log(text);
	}

	onPress(navigate) {
		console.log("PRessed");
		navigate('AddItem2')
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>We want our app to make life easier for students,
				and there is no better way to do so than getting advice from experienced students.
					To do that, we allow students to add to the map.</Text>
				<Text>Please enter your .edu email.</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={text => this.onChangeText(text)}
				/>
				<Button
					onPress={() => this.onPress(navigate)}
					color="#841584"
					title="hey"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
});

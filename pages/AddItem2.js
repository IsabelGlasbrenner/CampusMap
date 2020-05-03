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


export default class AddItem2 extends React.Component {

	onChangeText(text) {
		console.log(text);
	}

	onPress(navigate) {
		console.log("PRessed");
		navigate('AddItem3')
	}

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.container}>
				<Text>Enter the 4 digit code sent to your email.</Text>
				<TextInput
					style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
					onChangeText={text => this.onChangeText(text)}
				/>
				<Button
					onPress={() => this.onPress(navigate)}
					color="#841584"
					title="2"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {

	},
});

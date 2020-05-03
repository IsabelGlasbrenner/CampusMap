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

let passcode;
let buildings;
let email;

export default class AddItem2 extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Step 2',
		};
	};


	onChangeText(text) {
		console.log(text);
		passcode = text;
	}

	render() {
		const { navigate } = this.props.navigation;
		console.log(this.props);
		email = this.props.navigation.getParam('email', null);
		buildings = this.props.navigation.getParam('buildings', []);

		async function onPress(navigate) {
			console.log("email: " + email);
			try {
				const postEmail = await fetch('http://172.220.7.76:8888/verify_code', {
					method: 'post',
					body: JSON.stringify({
						email: email,
						code: passcode,
					})
				});
				const response = await postEmail.json();
				console.log(response);
			} catch (err) {
				console.log("Error fetching data-----------", err);
			}
			navigate('AddItem3', { buildings: buildings });
		}

		return (
			<View style={styles.container}>
				<Text style={styles.subheader}>Enter the 4 digit code sent to your email.</Text>
				<TextInput
					style={styles.input}
					onChangeText={text => this.onChangeText(text)}
				/>
				<Button
					style={styles.button}
					onPress={() => onPress(navigate)}
					color="#c5050c"
					title="VERIFY CODE"
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		textAlign: 'center',
		position: 'absolute',
		top: 40,
		width: 400,
		fontSize: 30,
		fontFamily: 'serif'
	},
	subheader: {
		width: 300
	},
	input: {
		width: 300,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		margin: 10,
		borderRadius: 7
	},
	button: {
		width: 300,
		fontSize: 20,
		borderRadius: 5
	},
	error: {
		width: 270,
		color: "#c5050c",
		margin: 20
	}
});

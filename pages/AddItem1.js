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

let email = "123@abc.com";
let buildings;


const initialState = {
	error: false,
};

export default class AddItem1 extends React.Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Step 1',
		};
	};

	constructor(props) {
		super(props);
		this.state = initialState;
	}

	onChangeText(text) {
		email = text;
		console.log(text);
		console.log(this.state.error);
	}

	render() {
		const { navigate } = this.props.navigation;
		buildings = this.props.navigation.getParam('buildings', []);

		async function onPress(navigate) {
			if (email.substring(email.length - 4, email.length) == ".edu") {
				try {
					const postEmail = await fetch('http://172.220.7.76:8888/get_code', {
						method: 'post',
						mode: 'cors',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: email
						})
					});
					const response = await postEmail.json();
					console.log(response);
				} catch (err) {
					console.log("Error fetching data-----------", err);
				}
				navigate('AddItem2', { email: email, buildings: buildings });
			}
		}

		return (
			<View style={styles.container}>
				<Text style={styles.header}>A campus for students, made by students.</Text>
				<Text style={styles.subheader}>Please enter your .edu email.</Text>
				<TextInput
					style={styles.input}
					onChangeText={text => this.onChangeText(text)}
				/>
				<Button
					style={styles.button}
					onPress={() => onPress(navigate)}
					color="#c5050c"
					title="SEND VERIFICATION CODE"
				/>
				{/* <Text style={styles.error}>Please use a .edu email, so we can verify you are apart of the school.</Text>) : null} */}
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

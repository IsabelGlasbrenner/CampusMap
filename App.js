import * as React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Routes from "./Routes.js";
import Home from "./pages/Home";
import AddItem1 from "./pages/AddItem1";
import AddItem2 from "./pages/AddItem2";
import AddItem3 from "./pages/AddItem3";
import PickMapItem from "./pages/PickMapItem";
import UniversityOptions from "./pages/UniversityOptions";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

const instructions = Platform.select({
	ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
	android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const App = createStackNavigator({
	//Constant which holds all the screens like index of any book 
	UWMadison: { screen: Home },
	//First entry by default be our first screen 
	//if we do not define initialRouteName
	AddItem1: { screen: AddItem1 },
	AddItem2: { screen: AddItem2 },
	AddItem3: { screen: AddItem3 },
	PickMapItem: { screen: PickMapItem },
	UniversityOptions: { screen: UniversityOptions },
},
	{
		initialRouteName: 'UniversityOptions',
	}
);

export default createAppContainer(App);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F5FCFF",
	},
	welcome: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
	},
	instructions: {
		textAlign: "center",
		color: "#333333",
		marginBottom: 5,
	},
});

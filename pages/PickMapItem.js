import React from 'react';
import {
	StyleSheet,
	Button,
	View,
	SafeAreaView,
	ScrollView,
} from 'react-native';

export default class PickMapItem extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			title: 'What would you like to view?',
		};
	};

	goToMap = type => {
		const { navigate } = this.props.navigation;
		navigate('UWMadison', { typeOfItem: type });
	};

	render() {
		return (
			<ScrollView style={styles.scrollView}>
				<SafeAreaView style={styles.container}>
					<View style={styles.btn}>
						<Button
							title="Printers"
							color="#c5050c"
							onPress={() => this.goToMap('Printers')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Microwaves"
							color="#c5050c"
							onPress={() => this.goToMap('Microwaves')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Restrooms"
							color="#c5050c"
							onPress={() => this.goToMap('Restrooms')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Campus Buildings"
							color="#c5050c"
							onPress={() => this.goToMap('Buildings')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Bike Racks"
							color="#c5050c"
							onPress={() => this.goToMap('bikeRacks')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Bus Stops"
							color="#c5050c"
							onPress={() => this.goToMap('busStop')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Computers"
							color="#c5050c"
							onPress={() => this.goToMap('computerLab')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Dining Hall"
							color="#c5050c"
							onPress={() => this.goToMap('dinningHall')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Dorms"
							color="#c5050c"
							onPress={() => this.goToMap('dorm')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Food"
							color="#c5050c"
							onPress={() => this.goToMap('food')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Library"
							color="#c5050c"
							onPress={() => this.goToMap('library')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Market"
							color="#c5050c"
							onPress={() => this.goToMap('market')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Parking Lots"
							color="#c5050c"
							onPress={() => this.goToMap('parkingLot')}
						/>
					</View>
					<View style={styles.btn}>
						<Button
							title="Studyrooms"
							color="#c5050c"
							onPress={() => this.goToMap('studyRooms')}
						/>
					</View>
				</SafeAreaView>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white',
	},
	btn: {
		marginTop: 10,
	},
	container: {
		marginHorizontal: 50,
		marginBottom: 15,
	},
});
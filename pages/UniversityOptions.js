import * as React from 'react';
import { Button } from 'react-native-paper';
import { View, ImageBackground, Dimensions, Picker } from 'react-native';

export default class UniversityOptions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: 'UW-Madison',
		};
	}

	static navigationOptions = {
		headerShown: false,
	};

	goToOptionScreen = () => {
		const { navigate } = this.props.navigation;
		navigate('PickMapItem');
	};

	render() {
		return (
			<ImageBackground
				source={require('../images/home_bg.png')}
				style={{
					position: 'absolute',
					top: 0,
					bottom: 0,
					left: 0,
					right: 0,
				}}>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						padding: 20,
						position: 'absolute',
						top: '37%',
						textAlign: 'center',
					}}>
					<Picker
						selectedValue={this.state.selectedValue}
						style={{ height: 30, width: '100%', margin: 20, marginLeft: 180 }}
						onValueChange={(itemValue, itemIndex) =>
							this.setState({ selectedValue: itemValue })
						}>
						<Picker.Item
							label="University of Wisconsin - Madison"
							value="UW-Madison"
						/>
						<Picker.Item
							label="University of Wisconsin - Milwaukee"
							value="UW-Milwaukee"
						/>
					</Picker>
					<Button
						style={{ width: '60%', marginTop: 10 }}
						color="white"
						mode="contained"
						onPress={() => this.goToOptionScreen()}>
						SHOW MAP
					</Button>
				</View>
			</ImageBackground>
		);
	}
}
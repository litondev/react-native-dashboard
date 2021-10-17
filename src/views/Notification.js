import React from "react";
import {ScrollView,Text,View,TouchableOpacity} from "react-native";
import { Header,Input,BottomSheet,ListItem,Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profil extends React.Component { 
	render(){
		return (
			<View>
				<Header 
					containerStyle={{height : 75}}
					leftComponent={() => 						
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Home')}
								style={{flexDirection : 'row',alignItems : 'space-between',justifyContent : 'center',alignContent : 'center'}}>
								<Icon name="arrow-left" size={20} color="white"/>
								<Text style={{paddingLeft : 5,fontWeight : 'bold',fontSize : 15}}>
									Back
								</Text>
							</TouchableOpacity>				
						}

					centerComponent={{ text: 'Notification', style: { color: '#fff' } }}/>

				<View style={{marginTop : 10}}>
					<ScrollView>
						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View><View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>

						<View>
							<Text style={{color : 'red'}}>Profil</Text>
						</View>
					</ScrollView>
				</View>
			</View>
		);
	}
}
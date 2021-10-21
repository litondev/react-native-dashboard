import React from "react";
import {ScrollView,Text,View,TouchableOpacity} from "react-native";
import { Header,Input,BottomSheet,ListItem,Avatar,Card} from 'react-native-elements';
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

				<View>
					<ScrollView style={{marginTop : 10,marginBottom : 50}}>
						{[1,2,3,4,5,6,7,8,9,10].map(() => (
							<Card>
								<Text style={{color : 'black'}}>Title </Text>
								<Card.Divider/>
								<Text style={{color : 'black'}}>Content</Text>
							</Card>
						))}
					</ScrollView>
				</View>
			</View>
		);
	}
}
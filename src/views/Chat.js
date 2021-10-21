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

					centerComponent={{ text: 'User', style: { color: '#fff' } }}

					rightComponent={() => 
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Home')}
								style={{flexDirection : 'row',alignItems : 'space-between',justifyContent : 'center',alignContent : 'center'}}>
								<Icon name="arrow-left" size={20} color="white"/>							
							</TouchableOpacity>	
					}/>

				<View style={{height : "80%"}}>
					<ScrollView>
						{[1,2,3,4,5,6,7,8,9,10].map(() => (
							<>
							<Card containerStyle={{width : '80%'}}>							
								<Text style={{color : 'black'}}>Recive</Text>
							</Card>
							<Card containerStyle={{width : '80%',alignSelf : 'flex-end'}}>
								<Text style={{color : 'black'}}>Send</Text>
							</Card>
							</>
						))}
					</ScrollView>				
					
				</View>

				<View style={{backgroundColor :'red',flexDirection : 'row'}}>
					<View><Icon name="arrow-left" size={20} color="black"/></View>
					<View style={{justifyContent : 'flex-end',flexGrow : 1}}><Input placeholder='BASIC INPUT'/></View>
					<View><Icon name="arrow-left" size={20} color="black"/></View>
				</View>
			</View>
		);
	}
}
import React from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Dashboard extends ValidationComponent {
  	async componentDidMount(){
    	let isAuth = await AsyncStorage.getItem("@is_auth");

    	if(!parseInt(isAuth)){
    		this.props.navigation.navigate('Signin');
    	}
  	}	

  	onLogout(){
  		AsyncStorage.setItem("@is_auth","0")
  		.then(() => {
  			this.props.navigation.navigate("Signin");
  		})
  	}

	render(){
		return (
			<ScrollView
				style={{
					flex : 1,	
					flexDirection : 'column',
					backgroundColor : 'white'
				}}>				
				<View style={{alignItems : 'center'}}>
					<View style={{marginTop : 50}}> 
						<Image source={require("../../assets/img/dashboard.png")}
							style={{height: 300,resizeMode: 'contain'}}/>
					</View>															

					<Button
							type="link"
							titleStyle={{fontSize : 11}}
							title="Logout"
							onPress={() => this.onLogout()}/>
			  	</View>
			</ScrollView>
		)
	}
}
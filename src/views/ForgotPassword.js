import React from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class ForgotPassword extends ValidationComponent {
  	constructor(props) {
  		super(props);  	

  		console.log("ForgotPassword");
  		
  		this.state = {
  			isLoadingForm : false,  		
  			form_email : "",
  		}

  		this.onChangeForm = this.onChangeForm.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
  	}

	onSubmit(){
		let isValid = this.validate({     
      		form_email: {	      		
      			required : true,
      			email : true
    	  	}      	    
    	});

    	if(!isValid || this.state.isLoadingForm){
    		return false;
    	}

		this.setState({
			isLoadingForm : true
		});

    	AsyncStorage.getItem("@default_users")
    	.then(res => {    		
    		let auth = JSON.parse(res).find((item) => item.email == this.state.form_email);

    		if(auth){
				Toast.show({	
					text1: '',			
	      			type: 'success',	      	  		
		      		text2: 'Berhasil',
	    		});	

	    		AsyncStorage.setItem("@key_forgot_password","1")
	    		.then(() => {
	    			this.props.navigation.navigate('KeyForgotPassword')
	    		});
			}else{
				throw new Error("Email Salah");
			}
    	})
    	.catch(err => {
    		this.setState({
    			isLoadingForm : false
    		})

    		Toast.show({	
				text1: '',			
	      		type: 'error',	      	  		
		    	text2: err.message,
	    	});	

    	})    			
	}

	onChangeForm(name,value){
		this.setState({
			[name] : value			
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
					<View style={{marginTop : 90}}> 
						<Image source={require("../../assets/img/forgot-password.png")}
							style={{height: 300,resizeMode: 'contain'}}/>
					</View>
				
					<View style={{alignItems : 'flex-start',width : '80%'}}>
						<Input  placeholder='Email'  					
						 	ref="form_email"
							value={this.state.form_email}						
							style={{fontSize : 15}}
							onChangeText={(value) => this.onChangeForm('form_email',value)}
							errorMessage={this.getErrorsInField('form_email')[0] || ''}
							leftIcon={    
								<Icon 
									name='envelope'      
									size={20}      
									color='gray'/>  
							}/>

						<View style={{alignItems : 'center',width : '100%',marginTop : 10}}>										
							<Button title="Send"
								buttonStyle={{width : 200,borderRadius: 20,padding : 10}}
								titleStyle={{padding : 5}}																								
								// disabled={this.state.isLoadingForm}
								loading={this.state.isLoadingForm} 
								onPress={this.onSubmit}
								icon={
									<Icon name="envelope"
										size={15}
										color="white"/>
								}/>
						</View>
					</View>					
						
					<View style={{width : '90%',marginTop : 20,alignItems : 'flex-end'}}>									
						<Button
							type="link"
							titleStyle={{fontSize : 11}}
							title="Signin"
							onPress={() => this.props.navigation.navigate('Signin')}/>
					</View>
			  	</View>
			</ScrollView>
		)
	}
}
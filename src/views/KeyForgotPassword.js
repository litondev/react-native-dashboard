import React from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class KeyForgotPassword extends ValidationComponent {
  	constructor(props) {
  		super(props);  	


  		this.state = {
  			isLoadingForm : false,  		
  			form_key : "",
  			form_new_password : "",
  			form_password_confirm : ""  			
  		}

  		this.onChangeForm = this.onChangeForm.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
  	}

  	async componentDidMount(){
    	let keyForgotPassword = await AsyncStorage.getItem("@key_forgot_password");

    	if(!parseInt(keyForgotPassword)){
    		this.props.navigation.navigate('Signin');
    	}
  	}

	onSubmit(){
		let isValid = this.validate({     
      		form_key: {	      		
      			required : true,      	
    	  	},
      		form_new_password: {
	      		required : true,
      			minlength : 4
      		},
      		form_password_confirm : {
      			required : true,
      			minlength : 4
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
    		let success = true;

    		if(success){
				Toast.show({	
					text1: '',			
	      			type: 'success',	      	  		
		      		text2: 'Berhasil',
	    		});		

				AsyncStorage.setItem("@key_forgot_password","0")
	    		.then(() => {
	    			this.props.navigation.navigate('Signin')
	    		});	    		
			}else{
				throw new Error("Terjadi Kesalahan");
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
					<View style={{marginTop : 50}}> 
						<Image source={require("../../assets/img/key-forgot-password.png")}
							style={{height: 300,resizeMode: 'contain'}}/>
					</View>
				
					<View style={{alignItems : 'flex-start',width : '80%'}}>
						<Input  placeholder='Key'  					
						 	ref="form_key"
							value={this.state.form_key}						
							style={{fontSize : 15}}
							onChangeText={(value) => this.onChangeForm('form_key',value)}
							errorMessage={this.getErrorsInField('form_key')[0] || ''}
							leftIcon={    
								<Icon 
									name='edit'      
									size={20}      
									color='gray'/>  
							}/>

						<Input  placeholder='New Password'  
						 	ref="form_new_password"				
							value={this.state.form_new_password}
							style={{fontSize : 15}}					
							onChangeText={(value) => this.onChangeForm('form_new_password',value)}
							errorMessage={this.getErrorsInField('form_new_password')[0] || ''}
							secureTextEntry={true} 
							leftIcon={    
								<Icon 
									name='key'      
									size={20}      
									color='gray'/>  
							}/>					

						<Input  placeholder='Konfirmasi Password'  
						 	ref="form_password_confirm"									
							value={this.state.form_password_confirm}
							style={{fontSize : 15}}					
							onChangeText={(value) => this.onChangeForm('form_password_confirm',value)}
							errorMessage={this.getErrorsInField('form_password_confirm')[0] || ''}
							secureTextEntry={true} 
							leftIcon={    
								<Icon 
									name='refresh'      
									size={20}      
									color='gray'/>  
							}/>		

						<View style={{alignItems : 'center',width : '100%',marginTop : 10}}>										
							<Button title="Change Password"
								buttonStyle={{width : 200,borderRadius: 20,padding : 10}}
								titleStyle={{padding : 5}}																								
								// disabled={this.state.isLoadingForm}
								loading={this.state.isLoadingForm} 
								onPress={this.onSubmit}
								icon={
									<Icon name="refresh"
										size={15}
										color="white"/>
								}/>
						</View>
					</View>													
			  	</View>
			</ScrollView>
		)
	}
}
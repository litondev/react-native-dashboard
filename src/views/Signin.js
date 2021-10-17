import React from "react";
import {View,Text,Image,StyleSheet,ScrollView} from "react-native";
import { Input,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Signin extends ValidationComponent {
  	constructor(props) {
  		super(props);  	
  		  	
  		this.state = {
  			isLoadingForm : false,  		
  			form_email : "",
  			form_password : "",
  		}

  		this.onChangeForm = this.onChangeForm.bind(this);
  		this.onSubmit = this.onSubmit.bind(this); 
   }

   componentDidMount(){
   		// Signin Is First Component In Navigation Stack It Call Once 
 		this.props.navigation.addListener('focus', () => {
      		this.setState({
      			isLoadingForm : false,
      			form_email : "",
      			form_password : ""
      		});

      		this.validate({});
    	});
   }

	onSubmit(){
		let isValid = this.validate({     
      		form_email: {	      		
      			required : true,
      			email : true
    	  	},
      		form_password: {
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
    		let auth = JSON.parse(res).find((item) => item.email == this.state.form_email && item.password == this.state.form_password);

    		if(auth){
				Toast.show({	
					text1: '',			
	      			type: 'success',	      	  		
		      		text2: 'Berhasil Masuk',
	    		});	

	    		AsyncStorage.setItem("@is_auth","1")
  				.then(() => {
  					this.props.navigation.navigate("Dashboard");
  				})
			}else{
				throw new Error("Password Atau Email Salah");
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
						<Image source={require("../../assets/img/signin.png")}
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

						<Input  placeholder='Password'  
						 	ref="form_password"
							value={this.state.form_password}
							style={{fontSize : 15}}					
							onChangeText={(value) => this.onChangeForm('form_password',value)}
							errorMessage={this.getErrorsInField('form_password')[0] || ''}
							secureTextEntry={true} 
							leftIcon={    
								<Icon 
									name='key'      
									size={20}      
									color='gray'/>  
							}/>					

						<View style={{alignItems : 'center',width : '100%',marginTop : 10}}>										
							<Button title="Signin"
								buttonStyle={{width : 200,borderRadius: 20,padding : 10}}
								titleStyle={{padding : 5}}																								
								// disabled={this.state.isLoadingForm}
								loading={this.state.isLoadingForm} 
								onPress={this.onSubmit}
								icon={
									<Icon name="arrow-left"
										size={15}
										color="white"/>
								}/>
						</View>
					</View>					
						
					<View style={{width : '90%',marginTop : 20}}>			
						<Button 							
							type="link"
							titleStyle={{fontSize : 11}}
							title="Forgot Password"
							onPress={() => this.props.navigation.navigate('ForgotPassword')}/>			
					
						<Button
							type="link"
							titleStyle={{fontSize : 11}}
							title="Signup"
							onPress={() => this.props.navigation.navigate('Signup')}/>
					</View>
			  	</View>
			</ScrollView>
		)
	}
}
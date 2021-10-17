import React from "react";
import {View,Text,Image,StyleSheet,ScrollView,Form,SafeAreaView} from "react-native";
import { Input,Button,CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ValidationComponent from 'react-native-form-validator';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';

export default class Signup extends ValidationComponent {
  	constructor(props) {
  		super(props);  	
  		this.state = {
  			isLoadingForm : false,  		
  			isNext : false,
  			form_email : "",
  			form_password : "",
  			form_username : "",

  			// textarea
  			form_address : "",

  			// checkbox
  			form_hobby_a : true,
  			form_hobby_b : true,
 			form_hobby_c : true,
 			isInvalidHobby : false,

 			// select
  			open: false,
      		value: null,
  			isInvalidValue : false,
      		items : [
      		    {label: '10 Tahun', value: '10'},
    			{label: '20 Tahun', value: '20'},    	
      		]
  		}

  		this.onChangeForm = this.onChangeForm.bind(this);
  		this.onSubmit = this.onSubmit.bind(this);
  		this.onNext = this.onNext.bind(this);

  		this.setValue = this.setValue.bind(this);
  		this.setItems = this.setItems.bind(this);
  		this.setOpen = this.setOpen.bind(this);
  	}


	onChangeForm(name,value){
		this.setState({
			[name] : value			
		})
	}

	onNext(){
		this.setState({
			isNext : !this.state.isNext
		})
	}

  	setOpen(open) {
	    this.setState({
      		open
    	});
  	}

  	setValue(callback) {
	    this.setState(state => ({
    	  	value: callback(state.value)
    	}));
  	}

  	setItems(callback) {
	    this.setState(state => ({
      		items: callback(state.items)
    	}));
	}

	onSubmit(){
		let isValid = this.validate({     
			form_username : {
				required : true
			},
      		form_email: {	      		
      			required : true,
      			email : true
    	  	},
      		form_password: {
	      		required : true,
      			minlength : 4
      		},
      		form_address : {
      			required : true
      		},      		      	
    	});  

		this.setState({
			isInvalidValue : !this.state.value
		});

		this.setState({	
			isInvalidHobby : !(this.state.form_hobby_a || this.state.form_hobby_b || this.state.form_hobby_c)
		})

		if(!isValid){
			Toast.show({	
				text1: '',			
	      		type: 'error',	      	  		
		      	text2: 'Terdapat data yang tidak valid',
	    	});	
		}

    	if(!isValid || this.state.isLoadingForm || this.state.isInvalidValue || this.state.isInvalidHobby){
    		return false;
    	}

		this.setState({
			isLoadingForm : true
		});

    	AsyncStorage.getItem("@default_users")
    	.then(res => {    		
    		// let auth = JSON.parse(res).find((item) => item.email == this.state.form_email && item.password == this.state.form_password);
    		let register =  true;

    		if(register){
				Toast.show({	
					text1: '',			
	      			type: 'success',	      	  		
		      		text2: 'Berhasil',
	    		});	

			 	this.props.navigation.navigate('Signin');	    
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
					<Image source={require("../../assets/img/signup.png")}
						style={{height: 300,resizeMode: 'contain'}}/>
				</View>
			
				{!this.state.isNext && <View style={{alignItems : 'flex-start',width : '80%'}}>
					<Input  placeholder='Username'  					
					 	ref="form_username"
						value={this.state.form_username}						
						style={{fontSize : 15}}
						onChangeText={(value) => this.onChangeForm('form_username',value)}
						errorMessage={this.getErrorsInField('form_username')[0] || ''}					
						leftIcon={    
							<Icon 
								name='user'      
								size={20}      
								color='gray'/>  
						}/>

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
						type="password"					
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

					<View style={{alignItems : 'center',width : '100%',marginTop : 20}}>										
						<Button title="Next"
							buttonStyle={{width : 200,borderRadius: 20,padding : 10}}
							titleStyle={{padding : 5}}																								
							// disabled={this.state.isLoadingForm}
							loading={this.state.isLoadingForm} 
							onPress={this.onNext}
							icon={
								<Icon name="arrow-right"
									size={15}
									color="white"/>
							}/>
					</View>
				</View>}


				{this.state.isNext && <View style={{alignItems : 'flex-start',width : '80%'}}>
					<Input  					
						placeholder='Alamat'  					
					 	ref="form_address"
						value={this.state.form_address}						
						style={{fontSize : 15}}
						multiline={true}
    					numberOfLines={3}
						onChangeText={(value) => this.onChangeForm('form_address',value)}
						errorMessage={this.getErrorsInField('form_address')[0] || ''}
						leftIcon={    
							<Icon 
								name='map'      
								size={20}      
								color='gray'/>  
						}/>


					<View style={{flexDirection : 'column',marginTop : 10}}>	
						<View style={{flexDirection : 'row',paddingLeft : 11}}>
							<Icon 
								name="list"
								size={20}
								color="gray"/> 
							<Text  style={{color : 'gray'}}>  Hobbi</Text>
						</View>
						<View style={{flexDirection : 'row'}}>
							<CheckBox  title='A'
								value="a"  
								checked={this.state.form_hobby_a}
								containerStyle={{backgroundColor : 'none',borderWidth : 0}}
								onPress={() => this.setState({form_hobby_a: !this.state.form_hobby_a})}/>

							<CheckBox  title='B'  
								value="b" 
								checked={this.state.form_hobby_b}
								containerStyle={{backgroundColor : 'none',borderWidth : 0}}
								onPress={() => this.setState({form_hobby_b: !this.state.form_hobby_b})}/>

							<CheckBox  title='C'  
								value="c"
								checked={this.state.form_hobby_c}
								containerStyle={{backgroundColor : 'none',borderWidth : 0}}
								onPress={() => this.setState({form_hobby_c: !this.state.form_hobby_c})}/>
						</View>
						{this.state.isInvalidHobby && <View style={{flexDirection : 'row',paddingLeft : 11}}>
					       	<Text style={{color : 'red',fontSize : 12}}>
					        	{this.state.isInvalidHobby ? "Data harus diisi" : ''}
					        </Text>
					     </View> 
					 	}
					</View>        
		     	
		     		<View style={{flexDirection : 'column',marginTop : 10}}>	
						<View style={{flexDirection : 'row',paddingLeft : 11,marginBottom : 10}}>
							<Icon 
								name="user"
								size={20}
								color="gray"/> 
							<Text  style={{color : 'gray'}}>  User</Text>
						</View>	

						<View style={{flexDirection : 'row',paddingLeft : 11}}>
			           		<DropDownPicker			           			
			           			listMode="SCROLLVIEW"
								searchable={true}				
			           			style={{height : 40,width: '100%'}}
					        	open={this.state.open}
					        	value={this.state.value}
					        	items={this.state.items}
					        	setOpen={this.setOpen}
					        	setValue={this.setValue}
					        	setItems={this.setItems}/>					      
					      </View>
						{this.state.isInvalidValue && <View style={{flexDirection : 'row',paddingLeft : 11,marginTop : 5}}>
					       	<Text style={{color : 'red',fontSize : 12}}>
					        	{this.state.isInvalidValue ? "Data harus diisi" : ''}
					        </Text>
					       </View> 
					   	}
					 </View>
					        
					<View style={{alignItems : 'center',width : '100%',marginTop : 20}}>										
						<Button title="Submit"
							buttonStyle={{width : 200,borderRadius: 20,padding : 10}}
							titleStyle={{padding : 5}}																								
							// disabled={this.state.isLoadingForm}
							loading={this.state.isLoadingForm} 
							onPress={this.onSubmit}
							icon={
								<Icon name="arrow-right"
									size={15}
									color="white"/>
							}/>

						{!this.state.isLoadingForm && <Button title="Before"
							buttonStyle={{width : 200,borderRadius: 20,padding : 10,marginTop : 10}}
							titleStyle={{padding : 5}}																								
							// disabled={this.state.isLoadingForm}
							loading={this.state.isLoadingForm} 
							onPress={this.onNext}
							icon={
								<Icon name="arrow-left"
									size={15}
									color="white"/>
							}/>
						}
					</View>
				</View>}


				<View style={{width : '80%',alignItems : 'flex-end',marginTop : 50}}>
					<Button
						type="link"						
						title="Signin"
						titleStyle={{fontSize : 11}}
						onPress={() => this.props.navigation.navigate('Signin')}/>
				</View>
			  </View>
			</ScrollView>
		)
	}
}
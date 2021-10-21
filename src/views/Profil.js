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
						<TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
							style={{flexDirection : 'row',alignItems : 'space-between',justifyContent : 'center',alignContent : 'center'}}>
							<Icon name="caret-left" size={20} color="white"/>							
							<Text style={{paddingLeft : 5,fontWeight : 'bold',fontSize : 15}}>Back</Text>
						</TouchableOpacity>				
					}

					centerComponent={{ 
						text: 'Profil', 
						style: { color: '#fff' } 
					}}>
				</Header>
				
				<ScrollView>
					<Card>
						<View style={{alignItems : 'center'}}>
							<Avatar  
								rounded
								size="xlarge"					
								source={{    
									uri:      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',  
								}}>  
								<Avatar.Accessory 																		
									size={40}
									containerStyle={{fontSize : 40,size : 13,borderRadius : 5}}>								
								</Avatar.Accessory>
							</Avatar>
						</View>

						<Input  placeholder='Username'  					
							style={{fontSize : 15}}
							leftIcon={    
								<Icon 
									name='user'      
									size={20}      
									color='gray'/>  
							}/>

						<Input  placeholder='Email'  					
							style={{fontSize : 15}}
							leftIcon={    
								<Icon 
									name='envelope'      
									size={20}      
									color='gray'/>  
							}/>

						<Input  					
							placeholder='Alamat'  					
							style={{fontSize : 15}}
							multiline={true}
    						numberOfLines={3}
							leftIcon={    
								<Icon 
									name='map'      
									size={20}      
									color='gray'/>  
							}/>

						{[1,2,3,4,5].map((itme) => (
							<Input  placeholder='Email'  					
								style={{fontSize : 15}}
								leftIcon={    
									<Icon 
										name='envelope'      
										size={20}      
										color='gray'/>  
								}/>
						))}
					</Card>
				</ScrollView>
			</View>
		);
	}
}
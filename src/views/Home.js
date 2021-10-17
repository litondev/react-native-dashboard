import React from "react";
import {ScrollView,Text,View,TouchableOpacity} from "react-native";
import { Header,Input,BottomSheet,ListItem,Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component { 
	constructor(props){
		super(props);
		this.state = {
			isVisible : false,
			list : [  
				{ title: 'List Item 1' },  
				{ title: 'List Item 2' },  
				{    title: 'Cancel',    containerStyle: { backgroundColor: 'red' },    titleStyle: { color: 'white' },    onPress: () => this.setState({isVisible : false}),  },
			],
			listP: [  
				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  



				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  


				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  


				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  


				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  
				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  
				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  
				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{    
					name: 'Amy Farha',    
					avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',    
					subtitle: 'Vice President' 
				},  

				{   
				 name: 'Chris Jackson',    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',   
				  subtitle: 'Vice Chairman'  
				}
			]
		}
	}

	render(){
		return (
				<ScrollView>
				<View>
					<Header  
						containerStyle={{
							height : 300,
							borderBottomLeftRadius : 80,
							borderBottomRightRadius : 80,
							alignItems : 'flex-start'
						}}

						leftComponent={() => 
							<View style={{paddingTop : 10}}>
								<TouchableOpacity
									onPress={() => this.setState({isVisible :  true})}>
									<Icon name="align-left" size={22} color="white"/>
								</TouchableOpacity>
							</View>
						}

						centerComponent={() => 
							<View style={{width : 300,height : '100%',position : 'absolute',top : 100}}>
								<Input  placeholder='Username'  
									// labelStyle={{borderWidth : 0,backgroundColor : 'blue'}}											
									// containerStyle={{borderWidth : 0,backgroundColor : 'red'}}
									inputContainerStyle={{borderWidth : 0,outlineWidth : 0,offsetWidth : 0,borderBottomWidth :0 }}
									inputStyle={{fontSize : 15,backgroundColor : 'white',borderWidth : 0,paddingTop : 10,width : 100,height : 50}}										
									leftIconContainerStyle={{backgroundColor : 'white',height : '93%'}}					
									leftIcon={    
										<Icon 													
											style={{paddingLeft : 10,paddingRight : 10}}
											name='search'      
											size={20}      
											color='gray'/>  
									}/></View>
						}	

						rightComponent={() => <View style={{
								flexDirection : 'row',
								justifyContent : 'space-around',
								width : 70,
								paddingTop : 10
							}}>
							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Notification')}>
								<Icon 
									name='bell'      
									size={22}      
									color='white'/>
							</TouchableOpacity>

							<TouchableOpacity
								onPress={() => this.props.navigation.navigate('Profil')}>
								<Icon 
									name='user'      
									size={22}      
									color='white'/>
							</TouchableOpacity>
						</View>}/>					

					<Text style={{color : 'black'}}>Home</Text>


					<BottomSheet  
						isVisible={this.state.isVisible}  
						containerStyle={{ 						
							flexDirection : 'column',
							backgroundColor : 'rgba(0.5, 0.25, 0, 0.2)',					
							justifyContent : 'flex-end'
						}}> 
						<View style={{backgroundColor : 'white',width : '100%',height : 500,borderTopLeftRadius : 80,borderTopRightRadius : 80,flexDirection : 'column'}}>

							<View style={{alignSelf : 'flex-end',alignItems : 'center',padding : 20,width : 100}}>
								<TouchableOpacity onPress={() => this.setState({isVisible : false})}>
									<Icon 
										name='times'      
										size={30}      
										color='gray'/>		
								</TouchableOpacity>
							</View>

							<View style={{backgroundColor : 'red'}}>													
								<ScrollView>
							 	{    
							 		this.state.listP.map((l, i) => (      
							 			<ListItem key={i} bottomDivider>       
							 			 <Avatar source={{uri: l.avatar_url}} />        
							 			 <ListItem.Content>        
							 			   <ListItem.Title>{l.name}</ListItem.Title>          
							 			   <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>       
							 			    </ListItem.Content>      
							 			    </ListItem>    
							 		)) 
							 	}
							 	</ScrollView>
							 </View>


						</View>
					</BottomSheet>
				</View>
			</ScrollView>
		)
	}
}
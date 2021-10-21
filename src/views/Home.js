import React from "react";
import { ScrollView,Text,View,TouchableOpacity } from "react-native";
import { Header,Input,BottomSheet,ListItem,Avatar,Card,TabView,Tab } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Home extends React.Component { 
	constructor(props){
		super(props);

		this.state = {
			isVisible : false,
			index : 0
		}
	}

	setIndex(index){
		return this.setState({
			index : index
		})
	}

	render(){
		return (
			<View style={{flex :1}}>
			
			<ScrollView>
					<Header 
						containerStyle={{
							height : 300,
							borderBottomLeftRadius : 80,
							borderBottomRightRadius : 80,
							alignItems : 'flex-start'
						}}

						leftComponent={() => 
							<View style={{ paddingTop : 10 }}>
								<TouchableOpacity onPress={() => this.setState({ isVisible :  true })}>
									<Icon name="align-left" size={22} color="white"/>
								</TouchableOpacity>
							</View>
						}

						centerComponent={() => 
							<View style={{
								width : 300,
								height : '100%',
								position : 'absolute',
								top : 100
							}}>
								<Input placeholder='Username'  
									inputContainerStyle={{
										borderWidth : 0,
										outlineWidth : 0,
										offsetWidth : 0,
										borderBottomWidth :0 
									}}

									inputStyle={{
										fontSize : 15,
										backgroundColor : 'white',
										borderWidth : 0,
										paddingTop : 10,
										width : 100,
										height : 50
									}}										

									leftIconContainerStyle={{
										backgroundColor : 'white',
										height : '93%'
									}}					

									leftIcon={    
										<Icon name='search' size={20} color='gray'											
											style={{
												paddingLeft : 10,
												paddingRight : 10
										}}/>  
									}
								/>
							</View>
						}	

						rightComponent={() => 
							<View style={{
								flexDirection : 'row',
								justifyContent : 'space-around',
								width : 100,
								paddingTop : 10
							}}>
							<TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
								<Icon name="envelope" size={22} color="white"/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.props.navigation.navigate('Notification')}>
								<Icon name='bell' size={22}  color='white'/>
							</TouchableOpacity>

							<TouchableOpacity onPress={() => this.props.navigation.navigate('Profil')}>
								<Icon name='user' size={22} color='white'/>
							</TouchableOpacity>
						</View>
						}>					
					</Header>

					<View style={{marginBottom : 10}}>
						<ScrollView horizontal>
							{[1,2,3].map((item) => (
								<Card containerStyle={{width : 200}}>  								
									<View style={{marginBottom:10}}>
										<Text style={{color : 'black',fontWeight : 'bold'}}>
											Title
										</Text>
									</View>
									<Card.Divider/>
									<Text style={{color : 'black'}}>
										Content
									</Text>
								</Card>
							))}		
						</ScrollView>

						{[1,2,3,4,5].map((item) => (
							<Card containerStyle={{borderRadius: 20,shadowColor : 'black',shadowOffset : {height : 20,width : 20},shadowOpacity : 0.2,shadowRadius : 3}}>  								
								<View style={{marginBottom:10}}>
									<Text style={{color : 'black',fontWeight : 'bold'}}>
										Title
									</Text>
								</View>
								<Card.Divider/>
								<Text style={{color : 'black'}}>Content</Text>
							</Card>
						))}					
					</View>

					<BottomSheet  
						isVisible={this.state.isVisible}  
						containerStyle={{ 						
							flexDirection : 'column',
							backgroundColor : 'rgba(0.5, 0.25, 0, 0.2)',					
							justifyContent : 'flex-end'
						}}> 

						<View style={{
							backgroundColor : 'white',
							width : '100%',
							height : 500,
							borderTopLeftRadius : 80,
							borderTopRightRadius : 80,
							flexDirection : 'column'
						}}>
							<View style={{
								alignSelf : 'flex-end',
								alignItems : 'center',
								padding : 20,
								width : 100
							}}>
								<TouchableOpacity 
									onPress={() => this.setState({isVisible : false})}>
									<Icon 
										name='times'      
										size={30}      
										color='gray'/>		
								</TouchableOpacity>
							</View>

							<View>													
								<ScrollView>
									<ListItem bottomDivider>
										<Avatar size="medium" rounded icon={{ name: 'home' }} source={{uri: 'https://localhost'}} />

										<ListItem.Content>
											<ListItem.Title>My Name</ListItem.Title>
											<ListItem.Subtitle>Email</ListItem.Subtitle>
										</ListItem.Content>
									</ListItem>

							 		{[1,2,3,4,5,6,7,8,9,10,11].map((l, i) => (      
							 				<TouchableOpacity>
							 					<ListItem key={i} bottomDivider>       
								 			 		<Avatar source={{uri: 'http://localhost'}} />        
								 			 		<ListItem.Content>        
								 			   			<ListItem.Title>Title Menu</ListItem.Title>          							 			   	
							 			 			</ListItem.Content>      
							 					</ListItem>    
							 				</TouchableOpacity>
							 			)
							 		)}
							 	</ScrollView>
							 </View>
						</View>
					</BottomSheet>

			</ScrollView>

			<Tab value={this.state.index} onChange={(index) => this.setIndex(index)}
				indicatorStyle={{backgroundColor : 'red'}}
				variant="primary"
				containerStyle={{backgroundColor : 'blue'}}>  
				<Tab.Item title="recent" 
					titleStyle={{fontSize : 10}}
					style={{fontSize : 10}}
					icon={() => <Icon name="align-left" size={15} color="white"/>}/> 

			 	<Tab.Item title="favorite" 
			 		icon={() => <Icon name="align-left" size={15} color="white"/>}/>  

			 	<Tab.Item title="cart" 
			 		icon={() => <Icon name="align-left" size={15} color="white"/>}/>			 		
			</Tab>

			</View>
		)
	}
}
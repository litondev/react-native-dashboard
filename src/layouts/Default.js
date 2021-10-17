import React from "react";
import {View,Text,Image,StyleSheet,Button,TouchableOpacity} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Default extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			defaultData : {}
		}
	}

	async componentDidMount(){    
		this.setState({
			defaultData : JSON.parse(await AsyncStorage.getItem("@default_data"))
		})				
  	}

  	setPage(index){    		
  		this.setState(prevState => {
  			return {  	
  				defaultData : {
  					...prevState.defaultData,
	  				current_page : index
	  			}
	  		}
  		},() => {
  			AsyncStorage.setItem("@default_data",JSON.stringify(this.state.defaultData)).then(() => {
  				this.props.navigation.navigate('Page' + index);  			  				
  			})
  		});
  	}

	render(){
		return (
			<View style={style.container}>																
			
				{this.props.children}
				     							
				<View style={{marginTop: 30,flexDirection : 'row',alignContent : 'space-between'}}>

					{ [...Array(this.state.defaultData.last_page).keys()].map((item,index) => (
						<TouchableOpacity
							key={index + 1}
							style={{backgroundColor: 'white',opacity : ((index + 1) == this.state.defaultData.current_page ? 0.5 : 1),height : 20,width : 20,borderRadius: 5,marginRight : 10}}
							onPress={() => this.setPage(index + 1)}/>										
					)) }			

				</View>								
			</View>
		)
	}
}

const style = StyleSheet.create({
	container : {
		flex : 1,
		justifyContent : 'center',
		alignItems : 'center',
		backgroundColor : '#86fff8fd',	
	}
})
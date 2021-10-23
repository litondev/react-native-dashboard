import React from "react";
import {ScrollView,Text,View,TouchableOpacity,Image} from "react-native";
import { Header,Input,BottomSheet,ListItem,Avatar,Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'; // Migration from 2.x.x to 3.x.x => showImagePicker API is removed.
import axios from "axios";

export default class Profil extends React.Component { 
	constructor(props){
		super(props);

		this.state = {
			resourcePath : {
			}
		}

		this.selectFile = this.selectFile.bind(this);
		this.uploadToServer = this.uploadToServer.bind(this);
	}

	selectFile(){
		var options = {
		  title: 'Select Image',
		  customButtons: [
		    { 
		      name: 'customOptionKey', 
		      title: 'Choose file from Custom Option' 
		    },

		  ],
		  storageOptions: {
		    skipBackup: true,
		    path: 'images',
		  },
		};

		launchImageLibrary(options, res => {
		  console.log('Response = ', res);
		  if (res.didCancel) {
		    console.log('User cancelled image picker');
		  } else if (res.error) {
		    console.log('ImagePicker Error: ', res.error);
		  } else if (res.customButton) {
		    console.log('User tapped custom button: ', res.customButton);
		    // alert(res.customButton);   
		  } else {
		    let source = res;
		    this.setState({
		      resourcePath: source.assets[0],
		    },() => {
		    	this.uploadToServer();
		    });
		  }
		});

			// launchCamera(options, res => {
		//     console.log('Response = ', res);
		//     if (res.didCancel) {
		//       console.log('User cancelled image picker');
		//     } else if (res.error) {
		//       console.log('ImagePicker Error: ', res.error);
		//     } else if (res.customButton) {
		//       console.log('User tapped custom button: ', res.customButton);
		//       // alert(res.customButton);   
		//     } else {
		//       let source = res;
		//       this.setState({
		//         resourcePath: source.assets[0],
		//       });
		//     }
		//   });
  	}

  	uploadToServer(){    		
		var data = new FormData();
		data.append("photo", {
			uri : this.state.resourcePath.uri,	
			type : this.state.resourcePath.type,
   			name: this.state.resourcePath.fileName,
		});

		data.append("hello","test");

		// form.append('photo',this.state.resourcePath);

		fetch('http://192.168.8.215:8000/api/test-upload', {
         	method: "POST",
         	headers: {
            	'Content-Type': 'multipart/form-data',         
            	'Accept': 'application/json',
         	},
         	body: data,         	         
      	}).then((response) => {
      		// console.log(response.status);
      		return response.json()
      	})
   		.catch((error) => {
   			console.log("Error" + error);
      		// alert("ERROR " + error)
   		})
   		.then((responseData) => {
   			console.log(responseData);
      		// alert("Succes " + responseData)
   		});

		// console.log(this.state.resourcePath);
		// var form = new FormData();
		// form.append("photo", {
		// 	uri : this.state.resourcePath.uri,	
		// 	type : this.state.resourcePath.type,
  //  			name: this.state.resourcePath.filename,
		// });

		// var config = {
		//     method: 'post',
		//     url: 'http://192.168.8.215:8000/api/test-upload',
		//     headers: {
		//        	'Content-Type': 'multipart/form-data',         
		//         'Accept': 'application/json',
		//     },
		//     data:  JSON.stringify(form),
		// };

  //   	axios(config)
  //       .then((response) => {
  //           console.log(JSON.stringify(response.data));
  //       })
  //       .catch((error) => {
  //           console.log(error);
  //       })
  //       .then((response) => {
  //       	console.log(response);
  //       })
  	}

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
					  <Image
			            source={{ uri: this.state.resourcePath.uri }}
			            style={{ width: 200, height: 200 }}/>

			          <Text style={{ alignItems: 'center' }}>
			            {this.state.resourcePath.uri}
			          </Text>

			          <TouchableOpacity onPress={(event) => this.selectFile(event)}>
			              <Text style={{color:'black'}}>Select File</Text>
			          </TouchableOpacity>       

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
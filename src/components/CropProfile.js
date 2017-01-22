import React, { Component, PropTypes } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import cropTypes from "../constants/CropTypes";

const propTypes = {
    crop: PropTypes.object.isRequired,
    navigator: PropTypes.object.isRequired
};

const profilePic = {
    width: 100,
    height: 100,
    alignSelf: "center"
};

class CropProfile extends Component {
    constructor(props){
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }
    
    onButtonPress(){
        const { navigator } = this.props;
        navigator.replace({
        id: "dashboard"
        });
    }
    
    render() {
        const { crop } = this.props;
        
        return (
            <View style={{flex: 1, flexDirection: "column", backgroundColor: "#47cacc"}}>
                <Image
                    source={require("../images/splash_screen.png")}
                    style={profilePic}
                    resizeMode="contain"
                />
                <Text style={{alignSelf: "center"}}>
                { crop.name }
                </Text>
                <Text style={{alignSelf: "center"}}>
                { crop.species.name }
                </Text>
                <Text style={{alignSelf: "center"}}>
                { crop.condition.name }
                </Text>
                 <TouchableOpacity style={{flex:1, flexDirection:'row'}} onPress={this.onButtonPress}>
                        <Icon
                            name = "arrow-circle-left"
                            size={50}
                            style = {{alignSelf:'flex-start', marginLeft:20, marginTop: 200}}
                            color="#499E9C"
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, flexDirection:'row'}}>
                     <Icon
                            name = "camera"
                            size={50}
                            style = {{alignSelf:'flex-start',marginLeft: 200, marginTop: 180 }}
                            color="gray"
                        />
                </TouchableOpacity>
            </View>
        );
    }
}

export default CropProfile;
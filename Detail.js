/**
 * Created by rocky on 2017/5/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

class Detail extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    render(){
        const {params} = this.props.navigation.state;
        const {goBack} = this.props.navigation;
        return (
            <View style={{alignSelf:'center'}}>
                <Button onPress={() => goBack()}
                        title="go back" />
            </View>
        )
    }
}

export default Detail;



















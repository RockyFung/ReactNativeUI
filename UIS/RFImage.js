/**
 * Created by rocky on 2017/5/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var imageAddress= 'http://img2.imgtn.bdimg.com/it/u=1616092571,2813843383&fm=23&gp=0.jpg';
class RFImage extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    render(){
        return (
            <View>
                <Text style={{fontSize:18}}>本地图片</Text>
                <Image source={require('../Images/001.jpg')}>
                    <Text style={{color: 'blue'}}>嵌套text组件</Text>
                    <View style={{backgroundColor:'red',width:100,height:100}}><Text style={{color: 'blue'}}>嵌套text组件</Text></View>
                </Image>

                <Text style={{fontSize:18,marginTop:20}}>网络图片</Text>
                <Image  style={{width:200,height:150 ,borderWidth:2,borderColor:'red'}} source={{uri:imageAddress}}>

                </Image>


            </View>
        )
    }
}

export default RFImage;

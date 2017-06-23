/**
 * Created by rocky on 2017/6/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert
} from 'react-native';

// 导入naive中的类
import {NativeModules} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;

// 自定义按钮
class CustomButton extends React.Component{
    render(){
        return(
            <TouchableHighlight
                style={styles.button}
                underlayColor='#a5a5a5'
                onPress={this.props.onPress}
            >
                <Text style={styles.buttonText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        )
    }
}


class RFNativeModules extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    render(){

        return (
            <View style={{marginTop:20}}>
                <Text style={styles.welcome}>
                    封装iOS原生模块实例
                </Text>
                <CustomButton text="点击调用原生方法" onPress={()=>CalendarManager.addEventTime3('生日聚会','江苏常州',14639877599992)}></CustomButton>

                <CustomButton text="调用带字典参数的原生方法" onPress={()=>CalendarManager.addEventDic('生日聚会000',
                {location:'江苏常州金坛',
                time:223153413232,
                description:['带上美女','带上美酒']
                })}/>

                <CustomButton text="调用带callback的方法" onPress={()=>CalendarManager.addEventCallBack((error,events)=>{
                if (!error){
                Alert.alert('回调参数','姓名:'+events[0]+' ' +'性别:'+ events[1])
                }
                })}/>

                <CustomButton text="调用Promise-callback的方法" onPress={()=>CalendarManager.addEventCallBack((error,events)=>{
                if (!error){
                Alert.alert('回调参数','姓名:'+events[0]+' ' +'性别:'+ events[1])
                }
                })}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 10,
        borderWidth:1,
        borderColor: '#cdcdcd',
    },
});
export default RFNativeModules;
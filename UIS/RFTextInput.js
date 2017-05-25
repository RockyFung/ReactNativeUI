/**
 * Created by rocky on 2017/5/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import QQLoginPage from './QQLoginPage'
class RFTextInput extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });

    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>

                <TextInput style={{height:40,borderColor:'red',borderWidth:1}}
                           multiline={true}
                           defaultValue='默认信息1'
                />
                <TextInput
                    style={styles.style_textInput}
                    autoFocus={true}
                    defaultValue='自动获取光标'/>
                <TextInput
                    style={styles.style_textInput}
                    editable={false}
                    defaultValue='关闭编辑'/>
                <Button
                    // 第一个参数为目标页面名字,第二个参数为给目标也的数据
                    onPress={() => navigate('QQLoginPage',{title:'QQ登录页面'})}
                    title={'QQ登录页面'}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    style_textInput:{
      height:40,
        marginLeft:20,
        marginRight:20,
        borderWidth:1,
        borderColor:'blue'
    },

});

export default RFTextInput;
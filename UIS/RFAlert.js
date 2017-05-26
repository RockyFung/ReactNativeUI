/**
 * Created by rocky on 2017/5/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Alert,
    TouchableHighlight,
} from 'react-native';


class CustomButton extends React.Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={[styles.buttonText,{color:'brown',textAlign:'center'}]}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class RFAlert extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            showText:'点击回调',
        };
      }

    _showText(text){
        this.setState({showText:text})
    }
    render(){

        return (
            <View>
                <Text style={{height:30,color:'black',margin:8}}>
                    弹出框实例
                </Text>


                <CustomButton
                    text="默认Alert"
                    onPress={()=>Alert.alert('提示!','提示内容提示内容')}
                ></CustomButton>

                <CustomButton
                    text="两个按钮Alert"
                    onPress={()=>Alert.alert('提示!','提示内容提示内容',[
                    {text:'取消',onPress:()=>this._showText('取消')},
                    {text:'确定',onPress:()=>this._showText('确定')}
                    ])}
                ></CustomButton>

                <CustomButton
                    text="多个按钮Alert"
                    onPress={()=>Alert.alert('提示!','提示内容提示内容',[
                    {text:'按钮一',onPress:()=>this._showText('按钮一')},
                    {text:'按钮二',onPress:()=>this._showText('按钮二')},
                    {text:'按钮三',onPress:()=>this._showText('按钮三')},
                    {text:'按钮四',onPress:()=>this._showText('按钮四')}
                    ])}
                ></CustomButton>

                <Text style={styles.showText}>{this.state.showText}</Text>

            </View>
        )
    }
}





const styles = StyleSheet.create({
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    showText:{
        marginTop:100,
        textAlign:'center',
        fontSize:30,
        color:'red'
    },
})








export default RFAlert;
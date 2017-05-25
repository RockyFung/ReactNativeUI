/**
 * Created by rocky on 2017/5/23.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity
} from 'react-native';
class RFTouchable extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            eventLog:[],
        };
      }
    render() {
        return (
            <View style={styles.container}>

                    <Text >
                        TouchableHighlight
                    </Text>
                    <TouchableHighlight
                        underlayColor='blue'
                        activeOpacity={0.5}
                        style={{ borderRadius: 8,padding: 6,marginTop:5,backgroundColor:'red'}}
                    >
                        <Text style={{fontSize:16}}>点击我</Text>
                    </TouchableHighlight>

                    <Text style={{marginTop:20,fontSize:16}}>
                        TouchableOpacity实例
                    </Text>
                    <TouchableOpacity style={{marginTop:10}}>
                        <Text style={{fontSize:16}}>点击改变透明度</Text>
                    </TouchableOpacity>

                    <Text style={{fontSize:16,marginTop:20}}>onPress,onPressIn,onPressOut,onLongPress</Text>
                    <View style={[styles.row, {justifyContent: 'center'}]}>
                        <TouchableOpacity
                            style={styles.wrapper}
                            onPress={() => this._appendEvent('press')}
                            onPressIn={() => this._appendEvent('pressIn')}
                            onPressOut={() => this._appendEvent('pressOut')}
                            onLongPress={() => this._appendEvent('longPress')}>
                            <Text style={styles.button}>
                                Press Me
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View  style={styles.eventLogBox}>
                        {this.state.eventLog.map((value, index) => <Text key={index}>{index} {value}</Text>)}
                    </View>

            </View>
        )
    }

    _appendEvent(eventName) {
        var limit = 6;
        var eventLog = this.state.eventLog.slice(0, limit - 1);
        eventLog.unshift(eventName);//unshift-> 从数组左边(第0个)添加
        this.setState({eventLog});
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    wrapper: {
        borderRadius: 8,
    },
    button: {
        color: '#007AFF',
    },
    eventLogBox: {
        padding: 10,
        margin: 10,
        height: 120,
        borderWidth: StyleSheet.hairlineWidth, //harilineWidth 当前平台小宽度
        borderColor: 'blue',
        backgroundColor: '#f9f9f9',
    },
});
export default RFTouchable;











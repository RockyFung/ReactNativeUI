/**
 * Created by rocky on 2017/5/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Switch,
    PickerIOS,
    Children
} from 'react-native';
var PickerItemIOS = PickerIOS.Item;
var items = ['C++','Java','Android','iOS','React Native','Swift'];
class RFSwitchAndPicker extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            // switch
            trueSwitchIsOn:true,
            falseSwitchIsOn:false,
            // pickerIOS
            selectedCourse:'iOS',
            selectedIndex:3,
        };
      }
    render(){
        return (
            <View style={styles.container}>
                <Text>Switch</Text>
                <Switch
                    disabled={true}
                    onValueChange={(value) => this.setState({falseSwitchIsOn:value})}
                    style={{marginBottom:10, marginTop:10}}
                    value={this.state.falseSwitchIsOn}
                ></Switch>
                <Switch

                    onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
                    value={this.state.trueSwitchIsOn} />
                <Text style={{marginTop:20}}>PickerIOS</Text>
                <PickerIOS
                    style={{borderWidth:1,borderColor:'blue',width:200}}
                    itemStyle={{fontSize:25,color:'red',textAlign:'center',fontWeight:'bold'}}
                    selectedValue={this.state.selectedCourse}
                    onValueChange={(selectedCourse,selectedIndex)=> this.setState({selectedCourse,selectedIndex})}
                >
                    {this._addPickerItem(items)}
                </PickerIOS>
                <Text>当前选择:{this.state.selectedCourse}</Text>
            </View>

        )
    }
    _addPickerItem(nItems){
        var tempItems = [];
        for (var i=0;i<nItems.length;i++){
           tempItems[i] = ( <PickerItemIOS key = {i} label = {nItems[i]} value = {nItems[i]}></PickerItemIOS>)
        }
        return tempItems;
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});













export default RFSwitchAndPicker;
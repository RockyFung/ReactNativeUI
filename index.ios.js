/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
    ListView
} from 'react-native';
import DetailPage from './Detail';
import {StackNavigator} from 'react-navigation';
import RFImage from './UIS/RFImage'
import RFText from './UIS/RFText'
import RFTextInput from './UIS/RFTextInput'
import QQLoginPage from './UIS/QQLoginPage'
import RFSwitchAndPicker from './UIS/RFSwitchAndPicker'
import RFTouchable from './UIS/RFTouchable'
import RFScrollView from './UIS/RFScrollView'
import RFListView from './UIS/RFListView'
import RFItemList from './UIS/RFItemList'
import RFRefreshControl from './UIS/RFRefreshControl'
import RFWebView from './UIS/RFWebView'
import RFModal from './UIS/RFModal'
import RFAlert from './UIS/RFAlert'
import RFAnimation from './UIS/RFAnimation'
import RFSimpleMovies from './PROJECT/RFSimpleMovies'

class HomePage extends  React.Component{
  static navigationOptions = {
    title:'ReactNative UI', //设置标题
    headerBackTitle:'返回',

  };

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      var ds = new ListView.DataSource({
          rowHasChanged:(r1,r2) => r1 !== r2,
      });
      this.state = {
          dataSource:ds,
          data:['Image','Text','TextInput','SwitchAndPicker','Touchable','ScrollView','ListView','RefreshControl','WebView','Modal','Alert','Animation','SimpleMovies']
      };
    }

    _renderRow(rowData,rowId,navigate){
        return (
            <Button
                // 第一个参数为目标页面名字,第二个参数为给目标也的数据
                onPress={() => navigate('RF'+rowData,{title:rowData})}
                title={rowData + '  ' + rowId}
            />
        )
    }

  render(){
      const {navigate} = this.props.navigation;
    return (
        <View>
          <ListView
              dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
              renderRow={(rowData,sectionId,rowId) => this._renderRow(rowData,rowId,navigate)}
              initialListSize={2}
              showsVerticalScrollIndicator={false}
          />


        </View>
    )
  }
}

const ReactNativeUI = StackNavigator({
  Home:{screen:HomePage},
  Detail:{screen:DetailPage},
    RFImage:{screen:RFImage},
    RFText:{screen:RFText},
    RFTextInput:{screen:RFTextInput},
    // 三级页面也需要在这里注册
    QQLoginPage:{screen:QQLoginPage},
    RFSwitchAndPicker:{screen:RFSwitchAndPicker},
    RFTouchable:{screen:RFTouchable},
    RFScrollView:{screen:RFScrollView},
    RFListView:{screen:RFListView},
    RFItemList:{screen:RFItemList},
    RFRefreshControl:{screen:RFRefreshControl},
    RFWebView:{screen:RFWebView},
    RFModal:{screen:RFModal},
    RFAlert:{screen:RFAlert},
    RFAnimation:{screen:RFAnimation},
    RFSimpleMovies:{screen:RFSimpleMovies},
});


AppRegistry.registerComponent('ReactNativeUI', () => ReactNativeUI);

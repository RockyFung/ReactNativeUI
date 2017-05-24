/**
 * Created by rocky on 2017/5/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    Image,
    Button
} from 'react-native';

class RFListView extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle:navigation.state.params.title,
        headerRight:<Button
            title='ItemList'
            onPress={()=>navigation.navigate('RFItemList',{title:'ItemList'})}
        />,

    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
          var rows = ['row 0','row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8'];
        this.state = {
            dataSource : ds.cloneWithRows(rows)
        };
      }

    // 配置cell方法
    _renderRow(rowData,sectionID,rowID){
        return(
            <TouchableOpacity>
                <View style={styles.row}>
                    <Image style={styles.thumb} source={require('../Images/001.jpg')}></Image>
                    <Text>{rowData}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            ></ListView>
        )
    }
}


var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        //justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    thumb: {
        width: 50,
        height: 50,
    },
});


export default RFListView;
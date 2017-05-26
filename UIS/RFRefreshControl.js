/**
 * Created by rocky on 2017/5/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    RefreshControl,
    ScrollView
} from 'react-native';

const Row = React.createClass({
    _onClick(){
        this.props.onClick(this.props.data);
    },

    render(){
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text}
                </Text>
            </View>
        )
    }
})


class RFRefreshControl extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isRefreshing: false,
            loaded: 0,
            // Array.from,将类数组转换为真正的数组对象,等同于Array.prototype.slice.call()
            rowData: Array.from(new Array(20)).map((value, index)=>({text: '初始行' + index})),
        };
      }

    render(){
        const rows = this.state.rowData.map((value,index)=>{
            return <Row key = {index} data={value}/>
        });

        return (
            <ScrollView
                style={styles.style_scrollview}
                refreshControl={
                      <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        // android适用
                        //colors={['#ff0000', '#00ff00', '#0000ff','#3ad564']}
                        // 指示器背景(android?)
                        progressBackgroundColor="yellow"
                        // 指示器颜色
                        tintColor='red'
                        // 指示器下方文字
                        title='loading...'
                      />
            }>
                {rows}
            </ScrollView>
        )
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(()=>{
            // 准备下拉刷新的5条数据
            const rowData2 = Array.from(new Array(5))
                .map((value,index)=>({
                text:'刷新的数据' + (this.state.loaded + index)
            }))
                // concat() 方法用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
                .concat(this.state.rowData);
            this.setState({
                loaded:this.state.loaded + 5,
                isRefreshing:false,
                rowData:rowData2,
            })
        },1000)
    }
}
const styles = StyleSheet.create({
    row: {
        borderColor: 'red',
        borderWidth: 5,
        padding: 20,
        backgroundColor: '#3a5795',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    style_scrollview: {
        flex: 1,
    },
});
export default RFRefreshControl;
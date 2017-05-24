/**
 * Created by rocky on 2017/5/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';
var rowData=[{'title':'item0','img':'../Images/001.jpg'},
             {'title':'item1','img':'../Images/002.jpg'},
             {'title':'item2','img':'../Images/001.jpg'},
            {'title':'item3','img':'../Images/001.jpg'},
            {'title':'item4','img':'../Images/002.jpg'},
            {'title':'item5','img':'../Images/001.jpg'},
            {'title':'item6','img':'../Images/001.jpg'},
            {'title':'item7','img':'../Images/002.jpg'},
            {'title':'item8','img':'../Images/001.jpg'},
            {'title':'item9','img':'../Images/001.jpg'}]

class RFItemList extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2})
        this.state = {
            dataSource:ds.cloneWithRows(rowData)
        };
      }

    // 返回一个Item
    renderRow(rowData){
        return(
        /* 实例化Item */
        <TouchableOpacity style={styles.itemStyle}>
            <Image source={require('../Images/002.jpg')} style={styles.itemImageStyle}/>
            <Text>{rowData.title}</Text>
        </TouchableOpacity>
    );
    }


    render(){

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                // 设置contentContainerStyle
                contentContainerStyle={styles.contentViewStyle}
            />
        )
    }
}
var styles = StyleSheet.create({

    contentViewStyle: {
        // 主轴方向
        flexDirection:'row',
        // 换行
        flexWrap:'wrap',
        justifyContent:'center',//space-around：伸缩项目会平均地分布在行里，两端保留一半的空间
    },

    itemStyle: {

        // 对齐方式
        alignItems:'center', // 水平居中
        justifyContent:'center',// 垂直居中
        // 尺寸
        width:100,
        height:100,
        // 左边距
        marginLeft:10,
        marginTop:10,
        borderColor:'blue',
        borderWidth:2,
    },

    itemImageStyle: {
        // 尺寸
        width:60,
        height:60,
        // 间距
        marginBottom:5
    }
});
export default RFItemList;














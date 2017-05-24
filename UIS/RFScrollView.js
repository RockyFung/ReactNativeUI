/**
 * Created by rocky on 2017/5/24.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity
} from 'react-native';

var NUM_ITEMS = 20;
class RFScrollView extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
        description:'description111111'
    });

    // 添加items
    _makeItems(nItems: number, styles){
        var items = [];
        for (var i = 0; i < nItems; i++) {
            items[i] = (
                <TouchableOpacity key={i} style={styles}>
                    <Text>{'Item ' + i}</Text>
                </TouchableOpacity>
            );
        }
            return items;
    }

    render(){
        var items = this._makeItems(NUM_ITEMS, styles.itemWrapper);
        // items中第5个元素改成横向滚动的scrollView
        items[4] = (
            <ScrollView key={'scrollView'} horizontal={true}>
                {this._makeItems(NUM_ITEMS, [styles.itemWrapper, styles.horizontalItemWrapper])}
            </ScrollView>
        );

        var verticalScrollView = (
            // contentContainerStyle用于包裹的所有子视图
            <ScrollView style={styles.verticalScrollView} contentContainerStyle={styles.contentContainer}>
                {items}
            </ScrollView>
        );

        return verticalScrollView;
    }
}

var styles = StyleSheet.create({
    verticalScrollView: {
        margin: 10,
    },
    itemWrapper: {
        backgroundColor: '#dddddd',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 5,
        borderColor: '#a52a2a',
        padding: 30,
        margin: 5,
    },
    // padding越大盒子会撑得越大(设置父类的宽高会压缩内容)
    horizontalItemWrapper: {
        padding: 50
    },
    contentContainer: {
        paddingVertical: 100
    }
});
export default RFScrollView;
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
    WebView
} from 'react-native';

var URL = 'http://www.lcode.org'
class RFWebView extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    render(){
        const {params} = this.props.navigation.state;
        const {goBack} = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <Text style={{height:40}}>加载网页</Text>
                <WebView
                    style={{backgroundColor:'gray'}}
                    ref="ssafdsfa"
                    source={{uri:URL}}
                    startInLoadingState={true}
                    // 设置决定当使用HTML5播放视频的时候在当前页面位置还是使用原生的全屏播放器播放，默认值false。【注意】.为了让视频在原网页位置进行播放，不光要设置该属性为true，还必须要设置HTML页面中video节点的包含webkit-playsinline属性(ios)
                    allowsInlineMediaPlayback={true}
                    // 界面反弹效果
                    bounces={true}
                    //该允许拦截WebView加载的URL地址，进行自定义处理。该方法通过返回true或者falase来决定是否继续加载该拦截到请求(ios)
                    //onShouldStartLoadWithRequest={function}
                    // 用于设置网页是否缩放自适应到整个屏幕视图以及用户是否可以改变缩放页面(ios)
                    scalesPageToFit={true}

                ></WebView>
            </View>
        )
    }
}

export default RFWebView;
/**
 * Created by rocky on 2017/6/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    Animated,
    TouchableHighlight,
    Easing
} from 'react-native';



class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

//视图淡入效果组件
class FadeInView extends React.Component {
    state: any;
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0), // 透明度为0
        };
    }
    componentDidMount() {
        Animated.timing(       // 使用timing过渡动画
            this.state.fadeAnim, // 开启动画的值
            {
                toValue: 1,        // 目标值
                duration: 3500,    // 配置延续时间
            }
        ).start();             // 开启动画
    }
    render() {
        return (
            <Animated.View   // 特殊带有动画的View视图
                style={{
                opacity: this.state.fadeAnim,  // Binds
              }}>
                {this.props.children}
            </Animated.View>
        );
    }
}


class RFAnimation extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            show:true,
            anim:new Animated.Value(0),
            compositeAnim:new Animated.Value(0),
        };
      }

    render(){
        return (
            <View style={{margin:20}}>
                <Text style={styles.welcome}>Animated使用实例</Text>
                <CustomButton text="动画:视图淡入效果"
                              onPress={()=>{
                              this.setState({show:!this.state.show})
                              }}/>

                {this.state.show && <FadeInView>
                    <View style={styles.content}>
                        <Image source={require('../Images/001.jpg')} style={{width:50,height:50}}/>
                    </View>
                </FadeInView>}

                <CustomButton text="动画:加入插值效果移动"
                              onPress={()=>{
                              Animated.spring(this.state.anim,{
                              toValue:0, // 目标值
                              velocity:7, // 初始速度
                              tension:-20, // 弹跳速度
                              friction:3, // 摩擦力值

                              }).start();
                              }}/>
                <Animated.View
                    style={[styles.content, {
              transform: [
                {scale: this.state.anim.interpolate({
                  inputRange: [0, 1], // 初始值为0 -> inputRange的值 1 -> toValue的 0
                  outputRange: [1, 3],
                })},
                {translateX: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 100],
                })},
                {rotate: this.state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [
                    '0deg', '720deg'
                  ],
                })},
              ]}
            ]}>
                    <Image source={require('../Images/002.jpg')} style={{width:50,height:50}}/>
                </Animated.View>


                <CustomButton text="动画:组合动画效果"
                              onPress={()=>{
              Animated.sequence([ //sequence 顺序执行 parallel 同时执行
              Animated.timing(this.state.compositeAnim, {
                toValue: 100,
                easing: Easing.linear, // 线性动画
              }),
              Animated.delay(1000),
              Animated.timing(this.state.compositeAnim, {
                toValue: 0,
                easing: Easing.elastic(2),// 有弹性的动画
              }),
              Animated.delay(2000),
              Animated.timing(this.state.compositeAnim, {
                toValue: 50,
                easing: Easing.linear,
              }),
              Animated.timing(this.state.compositeAnim, {
                toValue: 0,
                easing: Easing.elastic(1),
              })
              ]).start();
            }}
                />
                <Animated.View
                    style={[styles.content, {
                   bottom:this.state.compositeAnim
                }]}>
                    <Image source={require('../Images/001.jpg')} style={{width:50,height:50}}/>
                </Animated.View>


            </View>
        )
    }




}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    content: {
        backgroundColor: 'green',
        borderWidth: 1,
        padding: 5,
        margin: 20,
        alignItems: 'center',
    },
});


export default RFAnimation;
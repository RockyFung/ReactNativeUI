/**
 * Created by rocky on 2017/5/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Modal,
    Switch,
    TouchableHighlight
} from 'react-native';


class Button extends React.Component {
    constructor(props){
        super(props);
        this.state={
            active: false,
        };
        this._onHighlight = this._onHighlight.bind(this);
        this._onUnhighlight = this._onUnhighlight.bind(this);
    }

    _onHighlight() {
        this.setState({active: true,});
    }

    _onUnhighlight() {
        this.setState({active: false,});
    }

    render() {
        var colorStyle = {
            color: this.state.active ? 'red' : 'blue',
        };
        return (
            <TouchableHighlight
                onHideUnderlay={this._onUnhighlight}
                onPress={this.props.onPress}
                onShowUnderlay={this._onHighlight}
                style={[styles.button, this.props.style]}
                underlayColor="gray">
                <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
            </TouchableHighlight>
        );
    }
}

class RFModal extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            animationType:'none',
            modalVisible:false,
            transparent:false
        };
          this._toggleTransparent = this.toggleTransparent.bind(this);
      }

    _setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    // none 出现的时候不带动画效果
    // fade 带有淡入动画的效果
    // slide 从底部滑动出来的动画效果
    _setAnimationType(type) {
        this.setState({animationType: type});
    }

    toggleTransparent() {
        this.setState({transparent: !this.state.transparent});
    }

    render(){

        const modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        }
        const innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: 'red', padding: 20}
            : null

        return (
            <View style={{paddingTop:20,paddingLeft:10,paddingRight:10}}>
                <Text style={{color:'red'}}>Modal实例演示</Text>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}
                >

                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text>Modal视图被显示:{this.state.animationType}动画效果.</Text>
                            <Button
                                onPress={this._setModalVisible.bind(this, false)}
                                style={styles.modalButton}>
                                <Text>关闭Modal</Text>
                            </Button>
                        </View>
                    </View>
                </Modal>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>动画类型</Text>
                    <Button onPress={this._setAnimationType.bind(this,'none')} style={this.state.animationType === 'none' ? {backgroundColor:'red'}: {}}>
                        无动画
                    </Button>
                    <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? {backgroundColor:'yellow'} : {}}>
                        滑动效果
                    </Button>
                    <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? {backgroundColor:'gray'} : {}}>
                        渐变效果
                    </Button>
                </View>


                <View style={styles.row}>
                    <Text style={styles.rowTitle}>透明</Text>
                    <Switch value={this.state.transparent} onValueChange={this._toggleTransparent} />
                </View>

                <Button style={{borderColor: 'red',borderWidth:1,height:30}} onPress={this._setModalVisible.bind(this, true)}>
                    <Text>显示Modal</Text>
                </Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        //flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    rowTitle: {
        //flex: 1,
        fontWeight: 'bold',
    },
    button: {
        borderRadius: 5,
        //flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },
    modalButton: {
        marginTop: 10,
        borderColor:'blue',
        borderWidth:1,
        height:50
    },
});
export default RFModal;
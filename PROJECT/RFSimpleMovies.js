/**
 * Created by rocky on 2017/5/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    ListView
} from 'react-native';

var MOVIES_DATA =[{title:'Title',year:'2017',posters:{thumbnail:'http://i.imgur.com/UePbdph.jpg'}},];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

class RFSimpleMovies extends React.Component{
    static navigationOptions = ({navigation}) => ({
        title:navigation.state.params.title,
    });

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          var ds = new ListView.DataSource({
              rowHasChanged:(r1,r2)=>r1!==r2,
          })
        this.state = {
            movies:null,
            dataSource:ds,
            loaded:false,
        };
      }

    // 只会在组件完成加载的时候调用一次
    // 一般加载数据都在这个方法里
    componentDidMount() {
        this.fetchData(REQUEST_URL)
    }

    // 加载数据
    fetchData(url){
        console.log('开始加载...');
        fetch(url)
        .then((response)=>response.json())
        .then((responseData)=>{
            console.log('result:' + responseData.movies);
            this.setState({
                movies:responseData.movies,
                loaded:true,
            })
        })
        .done()
    }

    // loading页面
    renderLoadingView(){
        return(
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

    // 有数据显示页面
    renderMovie(movie){
        return(
            <View style={styles.container}>
                <Image style={styles.image_style} source={{uri:movie.posters.thumbnail}}></Image>
                <View style={styles.right_style}>
                    <Text style={styles.title} >{movie.title}</Text>
                    <Text style={styles.year}>{movie.year}</Text>
                </View>
            </View>
        )
    }

    render(){
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        //var movie = this.state.movies[0];
        return(
            <ListView
                style={styles.listView}
                dataSource={this.state.dataSource.cloneWithRows(this.state.movies)}
                renderRow={(rowData,sectionId,rowId)=>this.renderMovie(this.state.movies[rowId])}
            >

            </ListView>
        ) //this.renderMovie(movie);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'row', //使得主容器里边的空间进行水平布局
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    image_style:{
        width:100,
        height:120,
        marginLeft:10,
        marginBottom:10,
    },
    right_style:{
      flex:1, // 使用这个样式之后，该控件可以占据除Image占据的空间之外的所有位置
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 8,
        textAlign: 'center',
    },
    year: {
        textAlign: 'center',
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
})


export default RFSimpleMovies;














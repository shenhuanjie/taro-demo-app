import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button, Image } from '@tarojs/components';
import './top.less';
import '../../assets/css/iconfont.css'

class Top extends Component {
  render() {
    return (
      <View className='top'>
        <View className='left'>
          <Text className='iconfont icon-left1 img'></Text>
        </View>
        <View className='right'>
          <Text className='iconfont icon-Search img'></Text>
          <Text className='iconfont icon-collect1 img'></Text>
          <Text className='iconfont icon-pintuangou img'></Text>
          <Text className='iconfont icon-more_point img' ></Text>
        </View>
      </View>
    )
  }
}

export default Top;

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import './template.less';

export default class Template extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {

    return (
      <View></View>
    )
  }
}

import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
import Cata from './cata';
import FoodList from './foodlist';
import './food.less';


export default class Food extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
      foodlist: [],
      currentList: []
    }
  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  /**
   * 切换分类
   */
  handleChangeCata(selectCata) {
    if (this.state.foodlist.some(item => item.pid == selectCata.id)) {
      //不用加载数据
      this.setState({
        currentList: this.state.foodlist.filter(item => item.pid == selectCata.id)
      })
    } else {
      //需要加载数据
      this.setState({
        foodlist: this.state.foodlist.concat(this.getData(selectCata))
      }, () => {
        this.setState({
          currentList: this.state.foodlist.filter(item => item.pid == selectCata.id)
        })
      });
    }
  }
  getData(selectCata) {
    return Array.from(
      Array(
        Math.round(
          Math.random() * 20
        )
      ),
      (v, k) => ({
        price: Math.round(Math.random() * 20),
        sole: Math.round(Math.random() * 50),
        img: Math.round(Math.random() * 10),
        pid: selectCata.id,
        id: selectCata.id + "_" + k,
        title: "分类" + selectCata.id + "菜品" + (k + 1)
      })
    );
  }
  render() {
    let { current, tabList, currentList, selectCata } = this.state;

    return (
      <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
        <AtTabsPane>
          <View className='food_body'>
            <Cata onChangeCata={this.handleChangeCata.bind(this)} /> <FoodList selectCata={selectCata} currentList={currentList} />
          </View>
        </AtTabsPane>
        <AtTabsPane>评价</AtTabsPane>
        <AtTabsPane>商家</AtTabsPane>
      </AtTabs >
    )
  }
}

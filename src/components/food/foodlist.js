import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './foodlist.less';

export default class FoodList extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  render() {
    let { selectCata, currentList } = this.props;
    console.log(JSON.stringify(this.props.currentList));
    return (
      <View className='foodlist' >
        <Text>{selectCata ? selectCata.name : ''}</Text>
        <View className='foodlist_forlist'>
          {
            currentList.map((item, index) => {
              return (
                <View key={item.id} className='foodlist_item'>
                  <Image className='foodlist_item_img'
                    src={
                      item.img == 1 ? require('../../assets/img/store.1.jpg') :
                        item.img == 2 ? require('../../assets/img/store.2.jpg') :
                          item.img == 3 ? require('../../assets/img/store.3.jpg') :
                            item.img == 4 ? require('../../assets/img/store.4.jpg') :
                              item.img == 5 ? require('../../assets/img/store.5.jpg') :
                                item.img == 5 ? require('../../assets/img/store.5.jpg') :
                                  item.img == 6 ? require('../../assets/img/store.6.jpg') :
                                    item.img == 7 ? require('../../assets/img/store.7.jpg') :
                                      item.img == 8 ? require('../../assets/img/store.8.jpg') :
                                        item.img == 9 ? require('../../assets/img/store.9.jpg') :
                                          item.img == 10 ? require('../../assets/img/store.10.jpg') :
                                            require('../../assets/img/store.1.jpg')
                    }></Image>
                  <View className='foodlist_item_info'>
                    <Text>{item.title}</Text>
                    <Text>月售{item.sole}</Text>
                    <Text>￥{item.price}</Text>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}

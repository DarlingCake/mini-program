//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{
        price: 0,
        name: '人人都会小程序实战',
        coverPath: '../../img/1.jpg'
      },
      {
        price: 45,
        name: '撸猫人人都会',
        coverPath: '../../img/2.jpg'
      },
      {
        price: 111,
        name: '狗住，马上好',
        coverPath: '../../img/2.jpg'
      }
    ]

  },

  onShow: function(){
    let list = [{
      price: 0,
      name: '人人都会小程序实战',
      coverPath: '../../img/1.jpg'
      },
      {
        price: 45,
        name: '撸猫人人都会',
        coverPath: '../../img/2.jpg'
      },
      {
        price: 111,
        name: '狗住，马上好',
        coverPath: '../../img/2.jpg'
      }
    ];
    // console.log(list);
    let i=0;
    let len = list.length;
    for (; i<len; i++){
      console.log(list[i]);
      if (list[i].price > 0) console.log(list[i].price);
      else console.log('免费');
    }
  }
})
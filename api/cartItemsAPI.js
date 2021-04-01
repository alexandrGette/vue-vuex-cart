const _cartItems = [
    { 'id': 1,'img': 'productimg/bxc.png', 'title': 'Вытяжное устройство BXC', 'price':12644, 'body':'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', 'code':' G2H1065', 'quantity':1  },
    { 'id': 2,'img': 'productimg/g2h.png', 'title': 'Вытяжное устройство G2H ', 'price':12644, 'body':'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия', 'code':' G2H1065', 'quantity':2  },
    { 'id': 3,'img': 'productimg/ghn.png','title': 'Вытяжное устройство GHN', 'price':12644, 'body':'12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',  'code':' G2H1065','quantity':1},  
  ]
  
  export default {
    getCartItems (cb) {
      setTimeout(() => cb(_cartItems), 100)
    }
  }
  
const _products = [
  { 'id': 1,'img': 'productimg/bxc.png', 'title': 'BXC', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство для механической системы вентиляции', 'quantity':1  },
  { 'id': 2,'img': 'productimg/g2h.png', 'title': 'G2H', 'minPrice':6848, 'maxPrice':56584, 'body':'Многофункциональное вытяжное устройство для естественной и гибридной вентиляции', 'quantity':1  },
  { 'id': 3,'img': 'productimg/ghn.png','title': 'GHN', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1},
  { 'id': 4,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },
  { 'id': 5,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },
  { 'id': 6,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },
  { 'id': 7,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },
  { 'id': 8,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },
  { 'id': 9,'img': 'productimg/Tda.png', 'title': 'TDA', 'minPrice':6848, 'maxPrice':56584, 'body':'Вытяжное устройство с датчиком присутствия', 'quantity':1  },



]

export default {
  getProducts (cb) {
    setTimeout(() => cb(_products), 100)
  }
}

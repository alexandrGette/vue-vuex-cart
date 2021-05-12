import cartItemsAPI from '../../../api/cartItemsAPI'

export default {
    state: {
        cartItems:[],
        ChecboxStatus:false,
    },
    mutations: {
        updateCartItems(state,cartItems){
            state.cartItems = cartItems
        },
        changeQuantity(state, payload){
            
            payload.cartItem.quantity += payload.argument;
        },
        deleteCartItem(state,cartItem){
            let index = state.cartItems.indexOf(cartItem);
            state.cartItems.splice(index, 1);
        
        },
        сlearCart(state){
            state.cartItems = [];
        
        },
        changeCheckboxStatus(state, status){
            state.ChecboxStatus = status;
        }
    },
    actions: {
        fetchCartItems({ commit }){
            cartItemsAPI.getCartItems(cartItems =>{
                commit('updateCartItems', cartItems)
            })
        },
        changeCheckboxStatus({commit},event){
            let status = event.target.checked;
            commit('changeCheckboxStatus', status)
        },
        changeQuantity({commit}, id){
            +id;
            let cartItems = this.getters.allcartItems;
            let cartItem = cartItems.find(cartItem => cartItem.id === id);
            let argument = +event.target.dataset.arg;
            if (cartItem.quantity === 1 && argument<0) {
                commit('deleteCartItem',cartItem)
            }else{
                commit('changeQuantity',{cartItem, argument})
            }
            
        },
        sendOrder({commit}){
            let cartItems = this.getters.allcartItems;
            let isNeedInstallation = this.getters.getChecboxStatus;
            let totalPrice = this.getters.cartTotalPrice;
            let totalCount = this.getters.cartTotalCount;
            let order = new function(){
                switch (isNeedInstallation) {
                    case true:
                       this.installation = 'Требуется установка' 
                        break;
                    case false:
                        this.installation = 'Установка не требуется' 
                        break;
                    default:
                        break;
                }
                this.totalPrice = totalPrice;
                this.totalCount = totalCount;
                this.items= [];
                for (let i = 0; i < cartItems.length; i++) {
                    const element = cartItems[i];
                    let item = {
                        name:element.title,
                        code:element.code,
                        quantity:element.quantity,
                        price:element.price,
                    }
                    this.items.push(item);
                }
            }
            fetch('https://httpbin.org/post',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(order)})
            .then(response =>response.json())
            .then(result => console.log(result))
            .then(commit('сlearCart'))
            
        },
        deleteItem({commit},id){
            +id;
            let cartItems = this.getters.allcartItems;
            let cartItem = cartItems.find(cartItem => cartItem.id === id);
            commit('deleteCartItem', cartItem)
        },
        сlearCart({commit}){
            commit('сlearCart')
        }
        
    },
    getters:{
        getChecboxStatus(state){
            return state.ChecboxStatus
        },
        allcartItems(state){
            return state.cartItems
        },
        cartTotalPrice(state, getters){
            return getters.allcartItems.reduce((totalPrice, cartItems) => {
                return totalPrice + cartItems.price * cartItems.quantity
            }, 0).toString()
            .replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$& ")
        },

        cartTotalCount(state, getters){
            return getters.allcartItems.reduce((totalСount, cartItems) => {
                return totalСount +  cartItems.quantity
            }, 0)
        },
    }
}
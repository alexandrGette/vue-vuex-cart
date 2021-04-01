import productsAPI from '../../../api/productsAPI'

export default {
    state: {
        products:[]
    },
    mutations: {
        updateAllProducts(state,products){
            state.products = products
        }
    },
    actions: {
        fetchProducts({ commit }){
            productsAPI.getProducts(products =>{
                commit('updateAllProducts', products)
            })
        }
    },
    getters:{
        allProducts(state){
            return state.products
        }
    }
}
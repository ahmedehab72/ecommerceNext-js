import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../store/ProductsSlice'
import   todayProductReducer   from './../store/todayProductsSlice'
import   categoryReducer   from './../store/categorySlice'
import   cartReducer   from './../store/cartSlice'

export const store = configureStore({
  reducer: {
    productsData: productsReducer ,
    todayProductData : todayProductReducer ,
    categoryData : categoryReducer ,
    cartData: cartReducer,

  


  },
})


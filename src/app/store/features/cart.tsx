import { Cart } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'
import { Lexend_Zetta } from 'next/font/google'

// Define the initial state using that type
const initialState: Cart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    //add to cart functionality
    addTocart(state,action){
      let uuid = Math.floor(1000+Math.random()*90000)
      let newobj = {...action.payload,uuid}
      state.push(newobj);
    },
    //del from cart
    delItem(state,{payload}){
      return state.filter((val)=>val.uuid !=payload)
    },
    //addition of item
    addcart(state,action){
      let obj=state.find((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size );
      if(obj){
        ++obj.qty;
        let newState = state.filter((val)=>val.id !== obj?.id)
        state = [...newState,obj]
        return;
      }
    },
    //subtraction of item
    subtractItem(state,action){
      let obj=state.find((val)=>
      val.id == action.payload.id &&
      val.color == action.payload.color &&
      val.size == action.payload.size );
      if(obj!= undefined){
        if(obj.qty <=1){
          return state.filter((val)=>val.uuid != obj?.uuid);
        }
        --obj.qty;
        let newState = state.filter((val)=>val.uuid == obj?.uuid)
        return
      }
    }
    
  },
})

export const {addTocart,delItem,addcart,subtractItem} = cartSlice.actions


export default cartSlice.reducer
import * as types from '../type'

const initialState ={
    posts:[],
    post:{},
    loading:false,
    error:null,
}
export const postReducer=(state=initialState,action)=>{
  switch(action.type){
      case types.GET_DATA:
          return{
              ...state,
              posts:action.payload,
              loading:false,
              error:null
          }
          default:
              return state
  }
}

export const getNameReducer=(state=initialState,action)=>{
    switch(action.type){
        case types.GET_NAMES:
            return{
                ...state,
                names:action.payload,
                loading:false,
                error:null
            }
            default:
            return state
    }
}
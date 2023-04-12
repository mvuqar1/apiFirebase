const initialState = {
  users:[],
  user:"",
  loading:false,
};

export function myReducer(state = initialState, action) {
  switch (action.type) {  

    case 'GET_DATA':
      return {
        ...state,
        users: action.payload,
        loading:false
      };

    case 'POST_DATA':
      console.log(action.payload)
      return {
        ...state,
        loading: false
      };
    case 'DELETE_DATA':
      return {
        ...state,
        loading:false
      };
    case 'GET_SİNGLE_USER':
      return {
        ...state,
        user:action.payload,
        loading:false
      };
    case 'PUT_DATA':
      return {
        ...state,
        loading:false
      };
      
    default:
      return state;
    }
}

export default myReducer;
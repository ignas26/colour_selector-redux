import colourArray from  '../assets/array/colours';

const coloursReducer=(state=colourArray, action)=>{
  switch(action.type){
    case "MAKE_CURRENT":
      return {...state, currentColour:action.payload};
    case "CHANGE_CURRENT":
      return {...state, currentColour:action.payload};
    default: return state;
  }
};

export default coloursReducer;
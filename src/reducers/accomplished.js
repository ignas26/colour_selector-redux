import variety from '../assets/array/variety';

const reducer = (state = variety, action)=>{
  if(action.type === 'RESULTS_HANDLER'){
    return state.map((result, i)=>{
      if(action.payload[0] === result.colour && result.result===''){
        return {...result, result:action.payload[1]};
      }else if(action.payload[0] === result.colour && result.result < action.payload[1]){
        return {...result, result:action.payload[1]};
      }else{
        return result;
      }
    })
  }else{
    return state;
  }
};

export default reducer
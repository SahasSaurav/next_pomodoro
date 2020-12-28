const timerReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN-MODAL':
      return {...state,isOpen:true}
    case 'CLOSE-MODAL':
      return {...state,isOpen:false}
    case 'TOGGLE-TIMER':
      return {...state,start:!action.payload}
    default:
      return state;
  }
};

export default timerReducer;

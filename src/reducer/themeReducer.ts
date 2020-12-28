const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE-ACCENT-COLOR':
    case 'TOGGLE-FONT':
    default:
      return state;
  }
};

export default themeReducer;

import * as constants from './constants';

const defaultState = {
  adminpage: 1,
  CUsend: false,
  CUsendvalue: false,
  AAsend: false,
  AAsendvalue: false,
  CPsend: false,
  CPsendvalue: false,
  Asend: false,
  Asendvalue: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case constants.SET_ADMIN_PAGE:
      return {
        ...state,
        adminpage: action.page,
        CUsend: false,
        CUsendvalue: false,
        AAsend: false,
        AAsendvalue: false,
        CPsend: false,
        CPsendvalue: false,
        Asend: false,
        Asendvalue: false,
      };
    case constants.CUSEND:
      return { ...state, CUsendvalue: action.value, CUsend: true };
    case constants.AASEND:
      return { ...state, AAsendvalue: action.value, AAsend: true };
    case constants.CPSEND:
      return { ...state, CPsendvalue: action.value, CPsend: true };
    case constants.ASEND:
      return { ...state, Asendvalue: action.value, Asend: true };
    default:
      return state;
  }
};

export default reducer;

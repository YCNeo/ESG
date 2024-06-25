import axios from 'axios'
import * as constants from './constants';

export const setadminpage = (page) => ({
  type: constants.SET_ADMIN_PAGE,
  page
});

const CUsuccesssend = (result) => ({
  type: constants.CUSEND,
  value: result
})

const AAsuccesssend = (result) => ({
  type: constants.AASEND,
  value: result
})

const CPsuccesssend = (result) => ({
  type: constants.CPSEND,
  value: result
})

const Asuccesssend = (result) => ({
  type: constants.ASEND,
  value: result
})

export const CUsendinfo = (user_name, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CUinfo.json', { user_name, access }).then((res) => {
      const result = res.data.data;
      dispatch(CUsuccesssend(result));
    }).catch(() => {
      alert('CUsendinfo fail')
    });
  }
}

export const AAsendinfo = (user_id, access) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/AAinfo.json', { user_id, access }).then((res) => {
      const result = res.data.data;
      dispatch(AAsuccesssend(result));
    }).catch(() => {
      alert('AAsendinfo fail')
    });
  }
}

export const CPsendinfo = (pm_id, material,equipment) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/CPinfo.json', { pm_id, material,equipment }).then((res) => {
      const result = res.data.data;
      dispatch(CPsuccesssend(result));
    }).catch(() => {
      alert('CPsendinfo fail')
    });
  }
}

export const Asendinfo = (project_id,pm_id, material,equipment) => {
  return (dispatch) => {
    axios./*正是對接時用post*/get('/api/Ainfo.json', { project_id,pm_id, material,equipment }).then((res) => {
      const result = res.data.data;
      dispatch(Asuccesssend(result));
    }).catch(() => {
      alert('Asendinfo fail')
    });
  }
}
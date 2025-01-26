import globalStore from '../store/store';
import axios from 'axios';

// const BASE_API_URL = 'https://staging-api.isleepemr.com/api/v1' || '';
const BASE_API_URL = 'http://localhost:3000';
const store = globalStore;

// Get Call
const Get = async (route, routeOptions = {}) => {
  const accessToken = store.getState()?.auth?.token;
  const options = {
    headers: {
      Accept: 'application/json',
      // Authorization: `Bearer ${accessToken}`,
      // Origin: 'http://localhost:5173/',
      // 'ngrok-skip-browser-warning': '69420',
    },
    ...routeOptions,
    // withCredentials: withCredentials && true,
  };
  try {
    const response = await axios.get(`${BASE_API_URL}/${route}`, options);
    return response;
  } catch (error) {
    if (error?.response?.status === 401) {
      // store.dispatch(logout());
    }
    throw error;
  }
};

// Post Call
const Post = async (route, payload, showAlert = true, noBearer = false) => {
  const accessToken = store?.getState()?.auth?.token;

  try {
    const headers = { Accept: 'application/json', Origin: 'http://localhost:5173/' };
    if (!noBearer) {
      headers['Authorization'] = `Bearer ${accessToken}`;
    }
    const response = await axios.post(`${BASE_API_URL}/${route}`, payload, {
      headers,
    });

    const data = response?.data?.data;
    const status = response?.data?.status;

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

// Patch Call
const Patch = async (route, payload, showAlert = true) => {
  const accessToken = store?.getState()?.auth?.token;
  try {
    const response = await axios.patch(`${BASE_API_URL}/${route}`, payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    });

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    const data = response?.data?.data;
    const status = response?.data?.status;
    if (status) {
      return data;
    } else {
      throw Error();
    }
  } catch (response) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

// Put Call
const Put = async (route, payload, showAlert = true) => {
  const accessToken = store?.getState()?.auth?.token;
  try {
    const response = await axios.put(`${BASE_API_URL}/${route}`, payload, {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    });
    const data = response?.data?.data;
    const status = response?.data?.status;

    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response?.response?.data?.error);
  }
};

// Delete Call
const Delete = async (route, showAlert = true) => {
  try {
    const accessToken = store?.getState()?.auth?.token;

    const headers = {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        Origin: 'http://localhost:5173/',
      },
    };
    const response = await axios.delete(`${BASE_API_URL}/${route}`, headers);

    const data = response.data?.data;
    const status = response?.data?.status;
    if (showAlert) {
      if (response?.data?.message) {
        // store.dispatch(successHandler({ msg: response?.data?.message }));
      }
    }
    if (status) {
      return data;
    }
  } catch (response) {
    if (showAlert) {
      if (response?.response?.data?.error && typeof response?.response?.data?.error === 'string') {
        // store.dispatch(errorHandler({ msg: response?.response?.data?.error }));
      }
    }
    throw Error(response.response?.data?.error);
  }
};

export { Post, Put, Get, Patch, Delete };

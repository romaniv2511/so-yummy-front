import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://soyummy-tw3y.onrender.com/api/v1';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {
    try {
      const req = await axios.post('/auth/register', user);
      const {data} =req;
      if(req.status === 200) {
        alert(data.message)
        return
      }
      console.log(data);
      token.set(data.token);
      return data;
    } catch (error) {

      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data }  = await axios.post('/auth/login', user);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/logout');
      token.unset();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) return thunkAPI.rejectWithValue();

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/auth/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

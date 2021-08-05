import Axios from 'axios';
import api from '../settings';

/* selectors */
export const getAllCurrencies = ({ currencies }) => currencies.data;
export const getCurrenciesLoadingState = ({ currencies }) => currencies.loading;
export const getFavorite = ({ currencies }) => currencies.favourite;

/* action name creator */
const reducerName = 'currencies';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const FETCH_ALL_START = createActionName('FETCH_ALL_START');
const FETCH_ALL_SUCCESS = createActionName('FETCH_ALL_SUCCESS');
const FETCH_ALL_ERROR = createActionName('FETCH_ALL_ERROR');
const ADD_TO_FAVOURITE = createActionName('ADD_TO_FAVOURITE');
const REMOVE_FROM_FAVOURITE = createActionName('REMOVE_FROM_FAVOURITE');
const REMOVE_ALL_FAVOURITE = createActionName('REMOVE_ALL_FAVOURITE');

/* action creators */
export const fetchCurrenciesStarted = (payload) => ({
  payload,
  type: FETCH_ALL_START
});
export const fetchCurrenciesSuccess = (payload) => ({
  payload,
  type: FETCH_ALL_SUCCESS
});
export const fetchCurrenciesError = (payload) => ({
  payload,
  type: FETCH_ALL_ERROR
});
export const addToFavourite = (payload) => ({
  payload,
  type: ADD_TO_FAVOURITE
});
export const removeFromFavourite = (payload) => ({
  payload,
  type: REMOVE_FROM_FAVOURITE
});
export const removeAllFavourite = (payload) => ({
  payload,
  type: REMOVE_ALL_FAVOURITE
});

/* thunk creators */
export const fetchCurrenciesFromAPI = () => {
  return (dispatch, getState) => {
    if (getState().currencies.data.length === 0) {
      dispatch(fetchCurrenciesStarted());

      Axios.get(`${api.url}/${api.tableA}`)
        .then((res) => {
          dispatch(fetchCurrenciesSuccess(res.data[0].rates));
        })
        .catch((err) => {
          dispatch(fetchCurrenciesError(err.message || true));
        });
    }
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_ALL_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false
        }
      };
    }
    case FETCH_ALL_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false
        },
        data: action.payload
      };
    }
    case FETCH_ALL_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload
        }
      };
    }
    case ADD_TO_FAVOURITE: {
      const currency = action.payload;
      const { favourite } = statePart;

      return {
        ...statePart,
        favourite: favourite.push(currency)
      };
    }
    case REMOVE_FROM_FAVOURITE: {
      const currency = action.payload;
      const { favourite } = statePart;

      favourite.splice(currency, 1);

      return {
        ...statePart,
        favourite: currency
      };
    }
    default:
      return statePart;
  }
}

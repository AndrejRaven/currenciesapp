/* selectors */
export const getFavorite = ({ currencies }) => currencies.favourite;
export const countAllFavorite = ({ favourite }) => favourite.length;
/* action name creator */
const reducerName = 'favourite';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* action types */
const REMOVE_FROM_FAVOURITE = createActionName('REMOVE_FROM_FAVOURITE');
const REMOVE_ALL_FAVOURITE = createActionName('REMOVE_ALL_FAVOURITE');

/* action creators */
export const removeFromFavourite = (payload) => ({
  payload,
  type: REMOVE_FROM_FAVOURITE
});
export const removeAllFavourite = (payload) => ({
  payload,
  type: REMOVE_ALL_FAVOURITE
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case REMOVE_FROM_FAVOURITE: {
      return {
        ...statePart,
        favourite: action.payload
      };
    }
    default:
      return statePart;
  }
}

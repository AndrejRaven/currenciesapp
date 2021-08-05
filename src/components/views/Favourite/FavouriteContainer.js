import { connect } from 'react-redux';
import {
  removeFromFavourite,
  removeAllFavourite,
  getFavorite
} from '../../../redux/favouriteRedux';
import Favourite from './Favourite';

const mapStateToProps = (state) => ({
  favourite: getFavorite(state)
});

const mapDispatchToProps = (dispatch) => ({
  removeFromFavourite: (currency) =>
    dispatch(removeFromFavourite({ currency })),
  removeAllFavourite: (currency) => dispatch(removeAllFavourite(currency))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);

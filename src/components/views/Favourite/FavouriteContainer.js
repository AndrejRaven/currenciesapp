import { connect } from 'react-redux'
import { getAllCurrencies, fetchCurrenciesFromAPI, getCurrenciesLoadingState, addToFavourite, getFavorite } from '../../../redux/currenciesRedux';
import Favourite from './Favourite';

const mapStateToProps = (state) => ({
  currencies: getAllCurrencies(state),
  loading: getCurrenciesLoadingState(state),
  favourite: getFavorite(state),
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesFromAPI()),
  addToFavourite: currency => dispatch(addToFavourite({
      favourite: props.favourite,
      currency
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
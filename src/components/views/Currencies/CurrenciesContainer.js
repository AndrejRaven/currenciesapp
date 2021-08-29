import { connect } from 'react-redux';
import {
  getFilteredCurrencies,
  fetchCurrenciesFromAPI,
  getCurrenciesLoadingState,
  addToFavourite,
  getFavorite,
  removeFromFavourite
} from '../../../redux/currenciesRedux';
import {
  getAllFilters,
  changeSearchPhrase
} from '../../../redux/filterReducer';
import Currencies from './Currencies';

const mapStateToProps = (state) => ({
  currencies: getFilteredCurrencies(state),
  loading: getCurrenciesLoadingState(state),
  favourite: getFavorite(state),
  filters: getAllFilters(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesFromAPI()),
  addToFavourite: (currency) => dispatch(addToFavourite(currency)),
  removeFromFavourite: (currency) => dispatch(removeFromFavourite(currency)),
  changeSearchPhrase: (phrase) => dispatch(changeSearchPhrase(phrase))
});

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);

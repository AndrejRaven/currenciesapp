import { connect } from 'react-redux'
import { getAllCurrencies, fetchCurrenciesFromAPI, getCurrenciesLoadingState, addToFavourite, getFavorite } from '../../../redux/currenciesRedux';
import Currencies from './Currencies';

const mapStateToProps = (state) => ({
  currencies: getAllCurrencies(state),
  loading: getCurrenciesLoadingState(state),
  favourite: getFavorite(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesFromAPI()),
  addToFavourite: currency => dispatch(addToFavourite(currency)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
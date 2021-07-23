import { connect } from 'react-redux'
import { getAllCurrencies, fetchCurrenciesFromAPI, getCurrenciesLoadingState } from '../../../redux/currenciesRedux';
import Currencies from './Currencies';

const mapStateToProps = (state) => ({
  currencies: getAllCurrencies(state),
  loading: getCurrenciesLoadingState(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrenciesFromAPI()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Currencies);
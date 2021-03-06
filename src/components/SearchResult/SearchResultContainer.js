import {connect} from 'react-redux';
import SearchResult from './SearchResult';
import {
  createAction_changeSearchString,
  getCardsForSearchResults,
  getSearchString,
} from '../../redux/searchStringRedux';

const mapStateToProps = (state) => ({

  cards: getCardsForSearchResults(state, state.searchString ),
  searchString: getSearchString(state),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: newSearchString => dispatch(createAction_changeSearchString(newSearchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
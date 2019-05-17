import {connect} from 'react-redux';
import Column from '../Column/Column.js';

export const getCardsForColumn = ({cards}, columnId) =>
  cards.filter(cards =>
    cards.columnId == columnId
  );

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);

import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increment: () => dispatch.count.increment(1),
  incrementAsync: () => dispatch.count.incrementAsync(1),
});

export default connect(mapState, mapDispatch)(Counter);

import { connect } from 'react-redux';
import Create from '../components/create';
import { changeWidth, changeHeight } from '../redux/actions/create';

function mapStateToProps(state) {
  const { width , height } = state.create;
  return {
    width, height
  };
}

const mapDispatchToProps = dispatch => ({
  onWidthChange: (e) => dispatch(changeWidth(e.target.value)),
  onHeightChange: (e) => dispatch(changeHeight(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);

import { connect } from 'react-redux';
import Create from '../components/create';
import { changeWidth, changeHeight, changeTitle, changeDescription } from '../redux/actions/create';

function mapStateToProps(state) {
  const { width , height, title, description } = state.create;
  return {
    width, height, title, description
  };
}

const mapDispatchToProps = dispatch => ({
  onWidthChange: (e) => dispatch(changeWidth(e.target.value)),
  onHeightChange: (e) => dispatch(changeHeight(e.target.value)),
  onTitleChange: e=> dispatch(changeTitle(e.target.value)),
  onDescriptionChange: e=> dispatch(changeDescription(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Create);

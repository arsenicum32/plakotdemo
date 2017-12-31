import { connect } from 'react-redux';
import Email from '../components/email';
import { changeEmail , sendEmail } from '../redux/actions/email';

const mapStateToProps = state => ({
  email: state.email.email ,
  canSignUp: state.email.canSignUp ,
  thanks: state.email.thanks
})


const mapDispatchToProps = dispatch => ({
  //onNameChange: (e) => dispatch(changeName(e.target.value))
  onChange:  e=> dispatch(changeEmail(e.target.value)) ,
  click: e=> dispatch(sendEmail(e.target.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Email);

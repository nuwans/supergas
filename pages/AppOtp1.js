import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../redux/actions';
import Header from '../components/Header';
import SelectNumber from '../components/NumberSelect';
const numbers=[
    '45454545454',
    '98898988444',
    '98898982214'
];
class App extends React.Component {
  componentWillMount(){
      console.log(this.props);
  }  
  selectPhoneNumber(name,number){
      console.log(name,number);
  }
  render() {
    const { location } = this.props;
    return (
      <div className="main_wrapper">
        <Header actions={this.props.actions}  user={this.props.user}></Header>
        <div  className="content_wrap">
          <SelectNumber name='number' handler={this.selectPhoneNumber.bind(this)}  numbers={numbers}></SelectNumber>
          {this.props.children}
          <div className="default_content">
            <div className="d_form">
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/new_connection_cable.svg"></img></div>
                    <div className="d_c_e_item">Get new gas connection</div>
                </div>
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/raise_a_complaint.svg"></img></div>
                    <div className="d_c_e_item">Raice a complaint</div>
                </div>
                <div className="d_c_element">
                    <div className="icon"><img src="./images/icons/change_address.svg"></img></div>
                    <div className="d_c_e_item">Change Address</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
 }
}
function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
  
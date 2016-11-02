import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import {FloatingInput} from '../components/FloatingInput';
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props);
    console.log(this.state);
    this.state = {
      pincode: ''
    }
  } 
  handleChange(e){
    this.setState({pincode:e.target.value});
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <FloatingInput 
          labelName="Pin Code"
          type="text"
          handleChange={()=>{
            this.handleChange.bind(this);
          }} />
          <div className="group">
            <button className="f_btn">Next</button>
          </div>
        </div>
      </div>
    );
  }
}

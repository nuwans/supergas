import React from "react";
import {Link } from "react-router";
import Input from '../components/TextInput';
import FloatingInput from '../components/FloatingInput';
<<<<<<< HEAD
import FloatingSelect from '../components/FloatingSelect';
=======
>>>>>>> ba471d7dec88982991f1e953db8b804af010df71
export default class Home extends React.Component {

  constructor(props, context) {
    super(props, context)
    console.log(this.props);
    console.log(this.state);
    this.state = {
      Pincode: '',
<<<<<<< HEAD
      PincodeError:'',
      showForm:false
=======
      PincodeError:''
>>>>>>> ba471d7dec88982991f1e953db8b804af010df71
    }
  } 
  handleChange(name,value){
    if(isNaN(value)==true){
      console.log('aa');
      this.setState({PincodeError:'Not a number'});
    }else{
       this.setState({PincodeError:''});
    }
    this.setState({Pincode:value});
<<<<<<< HEAD
  }
  ValidatePin(){
    this.setState({showForm:true});
  }
  handleTextInput(name,value){
    var temp={};
    temp[name]=value;
    this.setState(temp);
=======
>>>>>>> ba471d7dec88982991f1e953db8b804af010df71
  }
  render() {
    return (
      <div className="content">
        <div className="form">
          <FloatingInput 
            labelName="Pin Code"
            type="text"
            error={this.state.PincodeError}
            name="Pincode"
            handler={this.handleChange.bind(this)} 
          />
<<<<<<< HEAD
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Name"
              type="text"
              error={this.state.PincodeError}
              name="Name"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingInput 
              labelName="Full Address"
              type="text"
              error={this.state.PincodeError}
              name="Address"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          { this.state.showForm ? 
            <FloatingSelect 
              labelName="Connection Type"
              error={this.state.PincodeError}
              name="ConnectionType"
              handler={this.handleTextInput.bind(this)} 
            />
            : ''
           }
          <div className="group">
            <button onClick={this.ValidatePin.bind(this)} className="f_btn">Next</button>
=======
          <div className="group">
            <button className="f_btn">Next</button>
>>>>>>> ba471d7dec88982991f1e953db8b804af010df71
          </div>
        </div>
      </div>
    );
  }
}

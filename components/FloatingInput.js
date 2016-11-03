import React from "react";
/*const FloatingInput = ({handleChange,this.props.error = false,type='text',labelName='Pin Code',value=''})=>{
  return <div className="group">
    <input className={this.props.error ? "inputMaterial invalid" : "inputMaterial"}
      onChange={handleChange}
      type={type}
      defaultValue={value}
      required
      autoCapitalize="off"
      autoComplete="off"
      autoCorrect="off" />
    <span className={this.props.error ? "highlight invalid" : "highlight"}></span>
    <span className={this.props.error ? "bar invalid" :"bar"}></span>
    <label className={this.props.error ? "invalid" : "normal"}>{labelName}</label>
    {this.props.error ? <span className="this.props.error">{this.props.error} </span> : null}
  </div>;
};
export {FloatingInput};*/

export default class FloatingInput extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleChange(e){
      this.setState({value:e.target.value})
      this.props.handler(this.props.name,e.target.value);
  }
  render() {
    return (
      <div className="group">
        <input className={this.props.error ? "inputMaterial invalid" : "inputMaterial"}
          onChange={this.handleChange.bind(this)}
          type={this.props.type}
          defaultValue={this.props.value}
          required
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off" />
        <span className={this.props.error ? "highlight invalid" : "highlight"}></span>
        <span className={this.props.error ? "bar invalid" :"bar"}></span>
        <label className={this.props.error ? "invalid" : "normal"}>{this.props.labelName}</label>
        {this.props.error ? <span className="error">{this.props.error} </span> : null}
      </div>
    );
  }
}

FloatingInput.propTypes = {
 aStringProp: React.PropTypes.string
};
FloatingInput.defaultProps = {
 type:'text',
 error:false,
 value:''
};

import React from "react";
export default class Select extends React.Component {
  constructor() {
    super()
    console.log(this.props);
    this.state={
        value:''
    }
  } 
  handleSelectChange(e){
     this.props.handler(this.props.name,e.target.value);

  }
  render() {
    return (
        <select onChange={this.handleSelectChange.bind(this)}className="num_select">
           {this.props.numbers.map(
               function(item,i){
                   return <option key={i} value={item}>ID #{i+1} {item}</option>
               }
           )}
        </select>
    );
  }
}

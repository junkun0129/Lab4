import React from "react";

export default class Field extends React.Component{

  // state = {
  //   isdisplay:false
  // }

  // is=()=>{
  //   if(this.props.name === this.props.state){
  //     isdisplay = true;
  //   }else{
  //     this.props.display = "none";
  //   }
  // }

  
  render(){
    return (
      <div className="Field">
        <div className="Field__Label">{this.props.label}</div>
        <input className="Field__Input" name = {this.props.name} onChange={this.props.onChange} value = {this.props.value}/>
        <div className="Field__HelperMessage" name = {this.props.name}>{this.props.errorMessage}</div>
      </div>
    );
  }
}

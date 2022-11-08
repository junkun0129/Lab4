import { Component } from "react";

import Field from "./components/Field";
import Button from "./components/Button";

/**
 *
 *
 * Create a form with common features like validation and help messages.
 *
 * - Add validation for email and password (https://www.w3schools.com/howto/howto_js_password_validation.asp)
 * - Show a helper message for validation errors
 * - Disable Login button until the form is valid
 * - Show a confirmation alert/modal/dialog when the Clear button is pressed
 * - Clear the form when the dialog is confirmed
 * - When validation checks are good, show a confirmation alert/modal/dialog
 *
 *
 */

 const mystyle = {
  color: "black",
  backgroundColor: "green",
  fontFamily: "Arial"
};

class App extends Component {


  state = {
    emailValue: "",
    passwordValue: "",
    correctEmail: "tuyoshi55@icloud.com",
    correctPassword: "11199jumanji!",
    errorMessage:"",
    isLogin: false,
    errorState:null,
    displayState:"none",
    isConfimation:false
  }

  pressSubmit = (e) =>{
    e.preventDefault();

    if(this.state.emailValue === this.state.correctEmail){
      if(this.state.passwordValue === this.state.correctPassword){
        console.log("ok")
        this.setState({isLogin:true})
      }else{
        this.setState({errorMessage:"you typed wrong password"})
        this.setState({errorState:"Password"})
        console.log(this.state.errorState)
      }
    }else{
      this.setState({errorMessage:"this email does not have any account"})
      this.setState({errorState:"Email"})
      console.log(this.state.errorState)
    }
    
  }

  pressClear = (e) =>{
    //e.preventDefault();
    this.setState({isConfimation:true})
  }

  enterFunction = (e) =>{
    if(e.target.name === "Email"){
      
      this.setState({emailValue:e.target.value})
      //console.log(this.state.emailValue+"  email");
    }else if(e.target.name === "Password"){
      this.setState({passwordValue:e.target.value})
      //console.log(this.state.passwordValue + "  passwords")
    }
    
    
    
  }
  
  loginTurn = ()=>{
    return {backgroundColor:"red"}
  }

  

 stylefun=()=>{
  if(this.state.emailValue&& this.state.passwordValue){

    return mystyle
    //console.log(this.state.emailValue +this.state.passwordValue)
    
  }
 }

 errorConfirm=()=>{
  if(this.state.errorState === "Email"){
    this.props.errorMessage =  "This email does not have any account"
    
  }else if(this.state.errorState === "Password"){
    this.props.errorMessage = "This is wrong password"
  }else{
    this.props.errorMessage = " ";
  }
 }

 displayConfirm = (e)=>{
  // if(this.state.errorState === this.props.name){
  //   return this.state.errorMessage
  // }
  return this.state.errorMessage
 }

 reset = ()=>{
  this.setState({errorMessage:"",
  isLogin: false,
  errorState:null,
  displayState:"none",
  isConfimation:false,
  emailValue: "",
  passwordValue: ""})
  console.log("lskd")
  // this.setState({isConfimation})
 }
 

  render() {
    return (
      <div className="App">
        <h1>React Lab 4</h1>
        <h1 style = {{display: this.state.isLogin ? "none":"block"}}>Login</h1>
        <div className="Container" style = {{display: this.state.isLogin ? "none":"block"}}>
          <Field label="Email" name = "Email" value = {this.state.emailValue} onChange = {this.enterFunction} errorMessage = {this.displayConfirm()} />
          <Field label="Password" name = "Password" value= {this.state.passwordValue} onChange={this.enterFunction} errorMessage = {this.displayConfirm()} />

          <div className="Buttons">
            <Button label="Clear" onClick = {this.pressClear}/>
            <div className="Spacer"/>
            <Button label="Login" onClick = {this.pressSubmit} style = {this.stylefun()}/>
          </div>
        </div>

        <div className = "Login-Success" style = {{display:this.state.isLogin ? "block":"none"}}>
            <h1>Login SEIKOU!!!!</h1>
        </div>

        <div className = "Confimation" style = {{display:this.state.isConfimation ? "block":"none"}}>
          
          <h2>you want to start over?</h2>
          <div className = "box">

            <button className = "Button" onClick={this.reset}>YES</button>
            <button className = "Button" onClick={()=>this.setState({isConfimation:false})}>NO</button>
            {/* <Button label = "Yes" onClick = {this.reset}/>
            <Button label = "No" onClick = {this.setState({isConfimation:false})}/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

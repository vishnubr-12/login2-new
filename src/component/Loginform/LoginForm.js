import React, { Component } from 'react';
import { connect } from "react-redux"
import { login } from '../../Redux/reducer';
import './LoginForm.css';
import EmployeeList from "./Employeelist"
class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: '',
        edit:false

    };
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit() {
  if(this.state.email === "hruday@gmail.com" && this.state.password === "hruday123") {
    this.setState({
    edit:true
    });
  } else {
    alert("User not registered");
  }
}

render() {
  console.log(this.state.edit);
  let {isLoginPending, isLoginSuccess, loginError} = this.props;
  return (
    <div>
      <div className="form-group-collection">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={e => this.setState({email: e.target.value})}
            value={this.state.email}/>
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            onChange={e => this.setState({password: e.target.value})}
            value={this.state.password}/>
        </div>
      </div>

      <input type="button" onClick={this.handleSubmit} value="Login" />

      <div className="message">
        { isLoginPending && <div>Please wait...</div> }
        { isLoginSuccess && <div>Success.</div> }
        { loginError && <div>{loginError.message}</div> }
      </div>
      {this.state.edit?<EmployeeList/> : ""
      
  }
    </div>
  )
}
}
  
  const mapStateToProps = (state) => {
    return {
      isLoginPending: state.isLoginPending,
      isLoginSuccess: state.isLoginSuccess,
      loginError: state.loginError
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      login: (email, password) => dispatch(login(email, password))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
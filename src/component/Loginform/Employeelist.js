import React, { Component } from 'react';
//import { connect } from "react-redux"
//import { login } from '../../Redux/reducer';
//import { user } from '../../Redux/Data';
class EmployeeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user:  [
              {"id": 1, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
              {"id": 2, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
              {"id": 3, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
              {"id": 4, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
              {"id": 5, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
              {"id": 6, "name": "test1", "age": 11, "gender": "male", "email": "test1@gmail.com", "phoneNo": "9415346313"},
            ]
        };
    }

    render() {
      const {edit}=this.props;
      console.log(edit);
      return (
        <div>
          
        {this.state.user && this.state.user.map(row => (
          <div>
            <div>{row.id}</div>
            <div>{row.name}</div>
            <div>{row.age}</div>
            <div>{row.gender}</div>
            <div>{row.email}</div>
            <div>{row.phoneNo}</div>
          </div>
        ))}
        </div>
      )
    }
}
 
export default EmployeeList;

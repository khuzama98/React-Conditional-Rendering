import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert'
import ToggleText from './components/ToggleText'
import RenderLogin from './components/RenderLogin'
import ShowTable from './components/ShowTable'
import AddEmployeeForm from './components/AddEmployeeForm';

class App extends Component {
  constructor(){
    super();
    this.state={
      isToggle: false,
      isLoggedIn: false,
      // isEdit:false,
      email:'',
      password:'',
      empList: [],
      addEmp: false,
      name:'',
      lastName:'',
      addEmail:'',
      salary:'',
    }
  }

  
  // toggleEdit = (item,index) => {
  //   this.setState({
  //       isEdit:true,
  //       name:item.name,
  //       lastName:item.lastName,
  //       addEmail:item.addEmail,
  //       salary:item.salary,
  //   })
// }

  toggleText = () => {
    this.setState({isToggle:(!this.state.isToggle)})
  }

  login = () => {
    const {email,password,isLoggedIn} = this.state;
    if(email==='admin@gmail.com' && password==='admin'){
      swal({
        icon: 'success',
        text: 'Successfully logged in!'
      })
      .then(()=>{
        this.setState({
          isLoggedIn: !isLoggedIn,
          email:'',
          password:''
        })
      })
    }
    else{
      swal({
        icon:'warning',
        text: 'Invalid Email or Password!'
      })
    }
  }

  toggleView = () => {
    this.setState({
      addEmp: !this.state.addEmp
    })
  }

  isDisabledLogin = () => {
    const {email,password} = this.state;
    return email.length===0 || password.length===0
  }

   handleChange=(event)=> {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
  }

  del = (index) => {
    console.log(index)
    this.state.empList.splice(index,1);
    this.setState({
      empList: [...this.state.empList]
    })
  }

  editItem = (userObj,index) => {
    this.state.empList[index] = userObj;
    this.setState({
      empList: [...this.state.empList]
    })
    swal({
      icon: 'success',
      text: 'updated successfully!'
    })
  }

  

  addEmployee = () => {
    const {name,addEmail,lastName,salary} = this.state;
    const today = new Date();
    const date = today.getDate() +'-'+(today.getMonth()+1)+'-'+ today.getFullYear();
    const emp = {
      name,
      lastName,
      addEmail,
      salary,
      date
    }
    this.setState({
      empList:[...this.state.empList,emp]
    })
    swal({
      icon: 'success',
      text: 'Employee successfully added!'
    })
    .then(()=>{
      this.setState({
        name:'',
        lastName:'',
        addEmail: '',
        salary: ''
      })
    })
  }

  logout = () => {
    swal({
      icon: 'success',
      text: 'Successfully logged out!'
    })
    .then(()=>{
      this.setState({isLoggedIn: !this.state.isLoggedIn})
    })
  }

  isDisabledEmployee = () => {
    const {name,lastName,addEmail,salary} = this.state;
    return name.length===0 || lastName.length===0 || addEmail.length===0 || salary.length===0

  }

  render() {

    let toDisplay = this.state.isLoggedIn ? ( 
    this.state.addEmp 
    ?
    <AddEmployeeForm 
    toggleView={this.toggleView}
    handleChange={this.handleChange}
    name={this.state.name}
    lastName={this.state.lastName}
    addEmail={this.state.addEmail}
    salary={this.state.salary}
    addEmployee={this.addEmployee}
    isDisabledEmployee={this.isDisabledEmployee}
    logout={this.logout}
    />
    :
    <ShowTable 
    toggleView={this.toggleView}
    editItem={this.editItem}
    empList={this.state.empList}
    // handleChange={this.handleChange}
    // name={this.state.name}
    // lastName={this.state.lastName}
    // addEmail={this.state.addEmail}
    // salary={this.state.salary}
    // addEmployee={this.addEmployee}
    // toggleEdit={this.toggleEdit}
    // isDisabledEmployee={this.isDisabledEmployee}
    logout={this.logout}
    del={this.del}
    />
    ) 
    : 
    (
    <RenderLogin 
    email={this.state.email}
    password={this.state.password}
    login={this.login}
    isLoggedIn={this.state.isLoggedIn}
    isDisabledLogin={this.isDisabledLogin}
    handleChange={this.handleChange}
    />
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ToggleText 
        isToggle={this.state.isToggle}
        toggleText={this.toggleText}
        />
        </header>

        {toDisplay}

      </div>
    );
  }
}

export default App;

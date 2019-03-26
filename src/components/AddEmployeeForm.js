import React, {Component}  from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class AddEmployeeForm extends Component {

    componentDidMount(){
        M.AutoInit();
    }

    render(){
        return(
            <div>
                <h3>Add Employee</h3>
                <div className='row'>
                    <div className='col m6 offset-m3 card'>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChange(e)} 
                            name='name' 
                            value={this.props.name} 
                            id="name" 
                            type="text" 
                            className="validate" 
                            />
                            <label htmlFor="name">Enter First Name...</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChange(e)} 
                            name='lastName' 
                            value={this.props.lastName} 
                            id="lastName" 
                            type="text" 
                            className="validate" 
                            />
                            <label htmlFor="lastName">Enter last Name...</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChange(e)} 
                            name='addEmail' 
                            value={this.props.addEmail} 
                            id="addEmail" 
                            type="text" 
                            className="validate" 
                            />
                            <label htmlFor="addEmail">Enter Email...</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChange(e)} 
                            name='salary' 
                            value={this.props.salary} 
                            id="salary" 
                            type="text" 
                            className="validate" 
                            />
                            <label htmlFor="salary">Enter Salary...</label>
                        </div>
                    </div>
                    <div className='row'>
                        <button 
                        onClick={()=>this.props.addEmployee()}
                        disabled={this.props.isDisabledEmployee()} 
                        className="waves-effect waves-light btn">
                        Add Employee
                        </button>
                    </div>
                    </div>
                </div>
                <div className="fixed-action-btn">
                    <button onClick={()=>this.props.toggleView()} className="btn-floating btn-large red">
                    <i className="large material-icons">visibility</i>
                    </button>
     
                </div>
            </div>
        )
    }

}

export default AddEmployeeForm
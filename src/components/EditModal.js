import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class EditModal extends Component{

    
    render(){
        let leftMargin={
            marginLeft:'12px'
        }
        return(
            <div>
                 <h3>Edit Employee</h3>
                <div className='row'>
                    <div className='col m6 offset-m3 card'>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChanges(e)} 
                            name='name' 
                            value={this.props.name} 
                            id="name" 
                            type="text" 
                            className="validate" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChanges(e)} 
                            name='lastName' 
                            value={this.props.lastName} 
                            id="lastName" 
                            type="text" 
                            className="validate" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChanges(e)} 
                            name='addEmail' 
                            value={this.props.addEmail} 
                            id="addEmail" 
                            type="text" 
                            className="validate" 
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s10 offset-s1">
                            <input 
                            onChange={(e)=>this.props.handleChanges(e)} 
                            name='salary' 
                            value={this.props.salary} 
                            id="salary" 
                            type="text" 
                            className="validate" 
                            />
                        </div>
                    </div>
                    <div className='row'>
                        <button 
                        onClick={()=>this.props.updateItem()}
                        disabled={this.props.isDisabledEmployees()} 
                        className="waves-effect waves-light btn">
                        Update
                        </button>
                        <button 
                        style={leftMargin}
                        onClick={()=>this.props.cancelUpdate()} 
                        className="waves-effect waves-light btn">
                        Cancel
                        </button>
                    </div>
                    </div>
                </div>
            </div> 
        )
    }

}

export default EditModal
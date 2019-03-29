import React, {Component} from 'react';
import EditModal from './EditModal';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class ShowTable extends Component {
    constructor(){
        super()
        this.state={
            isEdit:false,
            name:'',
            lastName:'',
            addEmail:'',
            salary:'',
            date:'',
            indexToEdit:'',
            // empList:[]
        }
    }

    componentDidMount(){
        M.AutoInit();
    }

    toggleEdit = (item,index) => {
        this.setState({
            isEdit:true,
            name:item.name,
            lastName:item.lastName,
            addEmail:item.addEmail,
            salary:item.salary,
            date:item.date,
            indexToEdit:index
        })
    }

    isDisabledEmployees = () => {
        const {name,lastName,addEmail,salary} = this.state;
        return name.length===0 || lastName.length===0 || addEmail.length===0 || salary.length===0
    
    }

    updateItem = () => {
        const {name,addEmail,lastName,salary,date,indexToEdit} = this.state;
        const emp = {
            name,
            lastName,
            addEmail,
            salary,
            date,
        }
        this.props.editItem(emp,indexToEdit)
            this.setState({
                isEdit:false,
                name:'',
                lastName:'',
                addEmail:'',
                salary:'',
                date:'',
                indexToEdit:'',
            })
    }

    cancelUpdate = () =>{
        this.setState({
            isEdit:false,
            name:'',
            lastName:'',
            addEmail:'',
            salary:'',
            date:'',
            indexToEdit:'',
        })
    }

    handleChanges=(event)=> {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
      }
    
    renderList = () => {
        let margin= {
            marginRight: '25px'
        }
        let marginLeft = {
            marginLeft: '8px'
        }
        let marginTop = {
            marginTop: '15px'
        }

        let list = this.props.empList.map((item,index)=> {
            return(
                <tr key={index} >
                    <td>{item.name}</td>
                    <td>{item.addEmail}</td>
                    <td>{item.salary}</td>
                    <td>{item.date}</td>
                    <td>
                        <button onClick={()=>this.toggleEdit(item,index)} className="waves-effect waves-light btn blue" >
                            Edit
                        </button>
                        <button onClick={()=>this.props.del(index)} style={marginLeft} className="waves-effect waves-light btn red">
                            Delete
                        </button>
                    </td>
                </tr>
            )
        })

        return(
            <div>
            <div style={marginTop} className='right-align' > 
                    <button 
                        style={margin}
                        onClick={()=>this.props.logout()}
                        className="waves-effect waves-light btn">
                        Logout
                    </button>
                </div>
                <h3>Employee Table</h3>
                <table className='centered responsive-table'>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                    </thead>
    
                    <tbody>
                    {list}
                    </tbody>
                </table>
                <div className="fixed-action-btn">
                    <button onClick={()=>this.props.toggleView()} className="btn-floating btn-large red">
                    <i className="large material-icons">mode_edit</i>
                    </button>
     
                </div>
            </div>
        )
    }


    render(){
        const {isEdit} = this.state;
       
        let toDisplay = isEdit ? <EditModal
        name={this.state.name}
        handleChanges={this.handleChanges}               
        lastName={this.state.lastName}
        addEmail={this.state.addEmail}
        salary={this.state.salary}
        updateItem={this.updateItem}
        cancelUpdate={this.cancelUpdate}
        isDisabledEmployees={this.isDisabledEmployees}
        /> : this.renderList()
        

        return(
            <div>
                {toDisplay}
            </div>        
        )
    }
    
}

export default ShowTable
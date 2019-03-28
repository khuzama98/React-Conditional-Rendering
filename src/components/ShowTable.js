import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class ShowTable extends Component {

    componentDidMount(){
        M.AutoInit();
    }

    render(){

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
                        <button className="waves-effect waves-light btn blue">
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
    
}

export default ShowTable
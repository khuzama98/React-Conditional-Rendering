import React , {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class RenderLogin extends Component {
    componentDidMount(){
        M.AutoInit();
    }
    render(){
        const margin = {
            marginTop: '30px'
        }

        return(
            <div style={margin} className='row'>
            <div className='col m5 s10 card offset-m3 offset-s1' >
                <h3>Login</h3>
                <div className="row">
                    <div className="input-field col s10 offset-s1">
                        <input 
                        onChange={(e)=>this.props.handleChange(e)} 
                        name='email' 
                        value={this.props.email} 
                        id="Email" 
                        type="text" 
                        className="validate" 
                        />
                        <label htmlFor="Email">Enter Email...</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s10 offset-s1">
                        <input 
                        onChange={(e)=>this.props.handleChange(e)} 
                        name='password' 
                        value={this.props.password} 
                        id="password" 
                        type="password" 
                        className="validate" 
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                </div>
                <div className='row' >
                    <button 
                    onClick={()=>this.props.login()}
                    disabled={this.props.isDisabledLogin()} 
                    className="waves-effect waves-light btn">
                    Login
                    </button>
                </div>
            </div>
            </div>
            )
        }
        
        
    }
    
    export default RenderLogin
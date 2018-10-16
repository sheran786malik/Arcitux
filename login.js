import React, {Component} from 'react';
import fire from './config/Fire';
import styles from './style.css' 

class Login extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error)=> {
            console.log(error);
        });

    }
    
    signup(e) {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
    
            <div>

                <div id="wrapper"> 
                    <h1 id="title"> Welcome  <br/> <sub id="caption">Let's start</sub></h1>
                </div>
                 <form>  
    
                <div class="form" id="form">
                <label for="email"></label>
               <p id="email">  <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                class="form-control" aria-describedby="emailHelp" placeholder="Username" autofocus="true"/></p>
               <label for="password"></label>
                <p id="password"> <input value={this.state.password} onChange={this.handleChange} type="password"
                name="password" class="form-control" placeholder="Password"/></p>
                <p><button type="submit" onClick={this.login} class="btn" id="submit" >Submit </button></p>
                <br/>
                </div>
                </form>
                <h1 id="footer"> Welcome </h1>
                <div id="bottom">  
                 </div>
                </div>
                
                
        );
    }
}

export default Login;

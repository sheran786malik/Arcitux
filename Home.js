import React, {Component} from 'react'; 
import fire from './config/Fire';
import styles from './style.css' 

class Home extends Component {
    constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }



  render() {
      return(
          <div>
    
            <div id="header">
                <button className="btn" id="logout" onClick={this.logout}>Log Out</button>
            </div>
          
          <div>
                <div id="hello"> Hello *Username* </div>
       
                    
                    
                    <div id="panel">
                         <center><h3 id="content">Course One</h3></center>
                    </div>
                    
                    
                 </div>
                    <div id="bottom">
                </div>  
            </div>   
          
        );
    }
}
export default Home;
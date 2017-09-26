import React, {Component} from 'react'
import Menu from './Menu'
import {Link, browserHistory} from 'react-router'
import { connect } from 'react-redux';
import {logout} from '../actions/authActions'

class Main extends Component {
    constructor(props){
        super(props)
        this.state = {loggedin: false}
        this.data = 'some data'
        // this is needed to bind 'this' to each function to use 'this'
        this.onClick = this.onClick.bind(this);
    }
    onClick(bool){
        // console.log(bool);
        this.setState({ loggedin: bool })
        browserHistory.push('/')
    }

    logout(e) {
        e.preventDefault();
        this.props.logout();
    }
    render() {

        const {isAuthenticated} = this.props.auth;

        

        // condition to add props based on what component is coming in 
        const props = {
            onClick: this.onClick
        }
        const content = (this.props.children) ? React.cloneElement(this.props.children, props) : null;
        return (
            <div className="container-fluid main">
                <Menu loggedin={isAuthenticated} loggedout={this.logout.bind(this)} />

                <div className="container-fluid main">
                    <br/> {content}
                </div>
            </div>

        )
    }
}

Main.propTypes = {
   auth:  React.PropTypes.object.isRequired,
   logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}


export default connect(mapStateToProps, {logout})(Main);
// export default Main;


// import React, {Component} from 'react'
// // import Menu from './Menu'
// import {Link, browserHistory} from 'react-router'
// import { connect } from 'react-redux';

// class Main extends Component {
//     constructor(props){
//         super(props)
//         this.state = {loggedin: false}
//         this.data = 'some data'
//         // this is needed to bind 'this' to each function to use 'this'
//         this.onClick = this.onClick.bind(this);
//     }
//     onClick(bool){
//         console.log(bool);
//         this.setState({ loggedin: bool })
//         browserHistory.push('/')
//     }
//     render() {

//         const {isAuthenticated} = this.props.auth;
        
//         console.log (isAuthenticated);
//         console.log(this.props)
//         // condition to add props based on what component is coming in 
//         const props = {
//             onClick: this.onClick
//         }
//         const content = (this.props.children) ? React.cloneElement(this.props.children, props) : null;
        
//         return (
//             <div className="container-fluid main">
//                 <div className="container-fluid main">
//                     <br/> 
//                         <nav className="navbar navbar-default">
//                             <div className="container-fluid">
       

//                               <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

//                                 {isAuthenticated && <ul className="nav navbar-nav navbar-right">
//                                   <li><Link to="/dashboard"><span className="teal glyphicon glyphicon-globe"></span> Dashboard</Link></li>
//                                   <li><Link to="/Participants"><span className="glyphicon glyphicon-cog"></span> Admin </Link> </li>
//                                   <li><Link to="/" onClick={() => props.loggedout(false)  } ><span className="glyphicon glyphicon-log-out"></span> Logout </Link></li> 
//                                 </ul>}

//                                 {!isAuthenticated && <ul className="nav navbar-nav navbar-right">
//                                 <li><Link to ="/login" ><span className="glyphicon glyphicon-log-in"></span>Login</Link></li>
//                                 <li><Link to ="/register"><span className="glyphicon glyphicon-user"></span> Register</Link></li>
//                                 </ul>}

//                               </div>
//                             </div>
//                           </nav>
//                 </div>
//             </div>

//         )
//     }
// }

// Main.propTypes = {
//    auth:  React.PropTypes.object.isRequired
// }

// function mapStateToProps(state) {
//     return {
//         auth: state.auth
//     }
// }


// export default connect(mapStateToProps)(Main);

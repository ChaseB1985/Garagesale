// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Route, Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
// import Payments from './Payments';
// import axios from 'axios';
// class Header extends Component {
//     constructor(){
//         super()
//         this.logout = this.logout.bind(this)
//     }
//     logout(event) {
//         event.preventDefault()
//         console.log('logging out')
//         axios.post('/user/logout').then(response => {
//             console.log(response.data)
//             if (response.status === 200) {
//               this.props.updateUser({
//                 loggedIn: false,
//                 username: null
//               })
//             }
//           }).catch(error => {
//               console.log('Logout error')
//           })
//     }

//     renderContent(){
//         switch(this.props.auth){
//             case null:
//                 return;
//             case false:
//                 return [
//                     <li><a href="/auth/google">Login with Google</a></li>,
//                     <li><a href="/login"> User Name and Password</a></li>,
//                     <li><a href="/surveys"> Just Visiting</a></li>,
//                     <li><a href="/" onClick={this.logout}> logout </a></li>
//                     //<Link to="/" className="btn" onClick={this.logout}></Link>
//                 ];

//             default:
//                 return [
//                     <li><Payments /></li>,
//                     <li><a href="/api/logout">Logout</a></li>
//                 ];
//         }
//     }

//     render() {
        
//         return (
//             <nav>
//                 <div className="nav-wrapper">
//                     <Link 
//                     to={this.props.auth ? '/surveys' : '/'}
//                     className="left brand logo"
//                     >
//                     Garage Sale
//                     </Link>
//                     <ul className="right">
//                     {this.renderContent()}
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }
//     function mapStateToProps({ auth }){
//         return{ auth };
//     }

// export default connect(mapStateToProps)(Header);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2"><a href="/api/logout">Logout</a></li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Garage Sale
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

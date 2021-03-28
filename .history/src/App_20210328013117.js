import './App.css';
import HomePage from './pages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch} from 'react-router-dom';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import {} from './redux/user'

class  App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })



      }
      else {
        this.setState({ currentUser: userAuth });
        
      }
      
    })

  }



  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  

  render(){
        console.log(this.state);
      
    return (
			<div>
				<Header  />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInAndSignUpPage} />
				</Switch>
			</div>
		);
  }
}


const mapDispatchToProps = (dispatch) => {
  return {

  }
}


export default connect(null, mapDispatchToProps) (App);

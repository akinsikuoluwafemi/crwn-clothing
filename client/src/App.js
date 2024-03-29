import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {Route, Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import CollectionPage from './pages/collection/collection.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user.actions';
import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';







class  App extends Component {
  


  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

      
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          console.log(snapShot)
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })



      }
      else {
        setCurrentUser(userAuth);
        
      }
      
    })

  }




  componentWillUnmount(){
    this.unsubscribeFromAuth();
    
  }
  

  render(){
      
    return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/shop/:collectionId" component={CollectionPage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route
					exact
					path="/signin"
					render={() => (this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
				/>
			</Switch>
		</div>
	);
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})


const mapDispatchToProps = (dispatch) => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

})


export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import {UserProfile, Home, Ask, NavBar, Callback, Logout} from './components'
import {PrivateRoute} from './Auth/PrivateRoute'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {withApollo } from 'react-apollo'
import {getUserInfo} from './Utilities'
import {isLoggedIn} from './Auth/AuthHelpers'

class App extends Component {
  state = {
    user: {
      userId: "",
      firstName: "",
      lastName: ""
    },
    address: {
      addressId: "",
      city: "",
      state: "",
      zip: ""
    },
    loaded: false,
    showAnalytics: false,
    showAsk: true,
  }
  componentDidMount = () => {
    if(isLoggedIn()){
      const data = getUserInfo()
      this.setState({user: data.user, address: data.address})

    }
  }
  setVisibility = (setDefault) => {
    if(setDefault){
      this.setState({showAnalytics: false, showAsk: true})
    }
    else{
      this.setState({showAnalytics: !this.state.showAnalytics, showAsk: !this.state.showAsk})
    }

  }
  setUser = (userData) => {
    this.setState({user: userData})
    localStorage.setItem('user',JSON.stringify(this.state.user))
  }
  setAddress = (addressData) => {
    this.setState({address: addressData})
    localStorage.setItem('address', JSON.stringify(this.state.address))

  }
  render() {
    return(
      <div>
        <Router>
          <div>
            <NavBar setVisibility={this.setVisibility} showAsk={this.state.showAsk} />
            <Switch>
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/ask" user={this.state.user} setVisibility={this.setVisibility}
              showAnalytics={this.state.showAnalytics} showAsk={this.state.showAsk} component={Ask} />
              <PrivateRoute path="/user-profile" loaded={this.state.loaded} setUser={this.setUser} setAddress={this.setAddress}  component={UserProfile}/>
              <PrivateRoute path="/logout" render={() => <Logout />} />
              <Route path="/callback" render={() => <Callback setUser={this.setUser} setAddress={this.setAddress} />} />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default withApollo(App)

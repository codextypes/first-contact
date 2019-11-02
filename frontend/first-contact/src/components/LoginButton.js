import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }

  componentClicked = () => {
    console.log("clicked");
  };

  responseFacebook = response => {
    console.log(response);
    this.setState({
        isLoggedIn:true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url
    })
  };

  

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
          <div>
              <img src={this.state.picture} alt={this.state.name} />
              <h2>Welcome Admin {this.state.name}</h2>
              <h4>Email: {this.state.email}</h4>
          </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="1521432181328349"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

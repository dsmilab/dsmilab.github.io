import React from "react";
import profilePicture from './assets/images/profile_picture.png';
import Content from './component/Content';

let App = React.createClass({
  getInitialState: function() {
    return {
      currentPage: 'home'
    };
  },

  render: function() {
    return (
      <div>
        <div className="nav">
          <a href="#" onClick={() => { this.setState({currentPage: "home"});}}><img id="profile-picture" src={profilePicture} /></a>
          <a href="#" onClick={() => { this.setState({currentPage: "cv"});}}>CV</a>
          <a href="#" onClick={() => { this.setState({currentPage: "research"});}}>Research</a>
          <a href="#" onClick={() => { this.setState({currentPage: "project"});}}>Projects</a>
          <a href="#" onClick={() => { this.setState({currentPage: "publications"});}}>Publications</a>
        </div>
        <div className="container">
          <div className="row">
            <div className="column" style={{ marginTop: this.state.currentPage == 'home' ? '25%' : '5%'}}>
              <Content page={this.state.currentPage}/>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default App;

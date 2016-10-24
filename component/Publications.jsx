import React from 'react';
import data from '../assets/data/publications.json';

let Publications = React.createClass({
  getInitialState: function() {
    return {
      currentTab: 'journal'
    };
  },

  render: function() {
    let items = [];

    data[this.state.currentTab].content.forEach((val, idx) =>{
      items.push(<li key={idx}>{val}</li>);
    });
  
    return (
      <div>
        <div className="tab">
          <a href="#" className={this.state.currentTab == 'journal' ? 'active' : ''} onClick={() => { this.setState({currentTab: "journal"});}}>Journal Papers</a>
          <a href="#" className={this.state.currentTab == 'conference' ? 'active' : ''} onClick={() => { this.setState({currentTab: "conference"});}}>Conference Papers</a>
          <a href="#" className={this.state.currentTab == 'book' ? 'active' : ''} onClick={() => { this.setState({currentTab: "book"});}}>Book Chapter</a>
          <a href="#" className={this.state.currentTab == 'other' ? 'active' : ''} onClick={() => { this.setState({currentTab: "other"});}}>Other</a>
        </div>
        <div className="publications-content">
          <h1>{data[this.state.currentTab].title}</h1>
          <ol>
            {items}
          </ol>
        </div>
      </div>
    );
  },
});

export default Publications;

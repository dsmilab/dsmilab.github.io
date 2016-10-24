import React from 'react';
import Home from './Home';
import Cv from './Cv';
import Research from './Research';
import Project from './Project';
import Publications from './Publications';

let Content = React.createClass({
  render: function() {
    let content = '';
    switch (this.props.page) {
      case 'home':
        content = <Home />;
      break;
      case 'cv':
        content = <Cv />;
      break;
      case 'research':
        content = <Research />;
      break;
      case 'project':
        content = <Project />;
      break;
      case 'publications':
        content = <Publications />;
      break;

    }

    return (
      <div>
        {content}
      </div>
    );
  },
});

export default Content;

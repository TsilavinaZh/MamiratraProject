import React from 'react';
import './assets/style.css'

class Component extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="hello-world">
          <h1>Start To Do App!</h1>
        </div>
        <div className="button-container">
          <a href="/application">Button</a>
        </div>
      </div>
    );
  }
}

export default Component;

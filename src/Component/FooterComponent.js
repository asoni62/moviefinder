import React, { Component } from 'react';
class FooterComponent extends Component {
  render() {
    return (
      <div className="appFooter container-fluid">
          <footer>
                <p>Copyright&nbsp; 
                    <span className="glyphicon glyphicon-copyright-mark"></span>
                    &nbsp;My Movie Finder, 2017.
                </p>
           </footer>
      </div>
    );
  }
}

export default FooterComponent;
